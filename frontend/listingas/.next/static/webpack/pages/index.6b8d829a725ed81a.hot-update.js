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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Information; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/esm/Table/index.js\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/TableBody */ \"./node_modules/@mui/material/esm/TableBody/index.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TableCell */ \"./node_modules/@mui/material/esm/TableCell/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/esm/TableContainer/index.js\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TableHead */ \"./node_modules/@mui/material/esm/TableHead/index.js\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TableRow */ \"./node_modules/@mui/material/esm/TableRow/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/esm/Paper/index.js\");\n/* harmony import */ var _MessageInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageInput */ \"./components/MessageInput.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _myMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myMethods */ \"./components/myMethods.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/esm/Box/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Information(param) {\n    let { messages  } = param;\n    _s();\n    const [messagesState, setMessagesState] = react__WEBPACK_IMPORTED_MODULE_1__.useState(messages);\n    const addMessage = (newMessage)=>{\n        const cleanMessages = [\n            ...messagesState\n        ];\n        cleanMessages.push(newMessage);\n        setMessagesState(cleanMessages);\n    };\n    const deleteMessage = (deletedMessageId)=>{\n        let cleanMessages = [];\n        messagesState.map((message)=>{\n            if (message.id != deletedMessageId) {\n                cleanMessages.push(message);\n            }\n        });\n        setMessagesState(cleanMessages);\n    };\n    const deleteRequest = (messageId)=>{\n        const userData = (0,_myMethods__WEBPACK_IMPORTED_MODULE_4__.getUserData)();\n        const { token  } = userData;\n        const headers = {\n            \"Content-Type\": \"application/json\",\n            \"Accept\": \"application/json\",\n            Authorization: \"Bearer \".concat(token)\n        };\n        try {\n            (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                url: \"http://127.0.0.1:8000/information/\".concat(messageId),\n                method: \"DELETE\",\n                headers: headers\n            }).then((response)=>{\n                //if username and password exist\n                if (response.status > 200 && response.status < 400) {\n                    deleteMessage(messageId);\n                }\n            });\n        } catch (responseErr) {\n            console.log(responseErr);\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            backgroundColor: \"gr\",\n            width: \"400px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    maxHeight: \"300px\",\n                    backgroundColor: \"rgba(255,255,255,0.9)\",\n                    maxWidth: \"500px\",\n                    marginTop: \"10px\"\n                },\n                component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    stickyHeader: true,\n                    size: \"small\",\n                    \"aria-label\": \"a dense table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            sx: {\n                                fontWeight: \"bold\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        align: \"right\",\n                                        children: \"Message\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            children: messagesState.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    sx: {\n                                        \"&:last-child td, &:last-child th\": {\n                                            border: 0\n                                        }\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            component: \"th\",\n                                            scope: \"row\",\n                                            children: message.username\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                            align: \"right\",\n                                            children: [\n                                                message.message,\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                                    variant: \"contained\",\n                                                    onClick: ()=>deleteRequest(message.id),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 15\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, message.id, true, {\n                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                lineNumber: 65,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                addMessage: addMessage,\n                sx: {\n                    backgroundColor: \"red\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                lineNumber: 92,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Information, \"CMDISR1DPCEkGyFJjPVBYJwjwIk=\");\n_c = Information;\nvar _c;\n$RefreshReg$(_c, \"Information\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25CLHFEQUFXQTtnQkFBQ1csWUFBWUE7Z0JBQVl1QixJQUFJO29CQUFDQyxpQkFBaUI7Z0JBQUs7Ozs7Ozs7Ozs7OztBQUdwRSxDQUFDO0dBL0V1QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVzc2FnZUJvYXJkLmpzPzlhNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XHJcbmltcG9ydCBNZXNzYWdlRm9ybSBmcm9tICcuL01lc3NhZ2VJbnB1dCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZ2V0VXNlckRhdGEgfSBmcm9tICcuL215TWV0aG9kcyc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb3JtYXRpb24oIHttZXNzYWdlc30gKSB7XHJcbiAgY29uc3QgW21lc3NhZ2VzU3RhdGUsIHNldE1lc3NhZ2VzU3RhdGVdID0gUmVhY3QudXNlU3RhdGUobWVzc2FnZXMpXHJcblxyXG4gIGNvbnN0IGFkZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc3QgY2xlYW5NZXNzYWdlcyA9IFsuLi5tZXNzYWdlc1N0YXRlXVxyXG4gICAgY2xlYW5NZXNzYWdlcy5wdXNoKG5ld01lc3NhZ2UpXHJcbiAgICBzZXRNZXNzYWdlc1N0YXRlKGNsZWFuTWVzc2FnZXMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVNZXNzYWdlID0gKGRlbGV0ZWRNZXNzYWdlSWQpID0+IHtcclxuICAgIGxldCBjbGVhbk1lc3NhZ2VzID0gW11cclxuICBcclxuICAgIG1lc3NhZ2VzU3RhdGUubWFwKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmlkICE9IGRlbGV0ZWRNZXNzYWdlSWQpIHtcclxuICAgICAgICBjbGVhbk1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBcclxuICAgIHNldE1lc3NhZ2VzU3RhdGUoY2xlYW5NZXNzYWdlcylcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVSZXF1ZXN0ID0gKG1lc3NhZ2VJZCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBnZXRVc2VyRGF0YSgpXHJcbiAgICBjb25zdCB7dG9rZW59ID0gdXNlckRhdGFcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIHVybDogYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9pbmZvcm1hdGlvbi8ke21lc3NhZ2VJZH1gLFxyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvL2lmIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBleGlzdFxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPiAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICBkZWxldGVNZXNzYWdlKG1lc3NhZ2VJZClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIH0gY2F0Y2ggKHJlc3BvbnNlRXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRXJyKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3tiYWNrZ3JvdW5kQ29sb3I6ICdncicsIHdpZHRoOiAnNDAwcHgnfX0+XHJcbiAgICA8VGFibGVDb250YWluZXIgc3g9e3ttYXhIZWlnaHQ6ICczMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC45KScgLCBtYXhXaWR0aDogJzUwMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0gY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXIgc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cImEgZGVuc2UgdGFibGVcIj5cclxuICAgICAgICA8VGFibGVIZWFkIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJ319PlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPlVzZXI8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+TWVzc2FnZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge21lc3NhZ2VzU3RhdGUubWFwKChtZXNzYWdlKSA9PiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgIGtleT17bWVzc2FnZS5pZH1cclxuICAgICAgICAgICAgICBzeD17eyAnJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGgnOiB7IGJvcmRlcjogMCB9IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPnttZXNzYWdlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9eygpPT5kZWxldGVSZXF1ZXN0KG1lc3NhZ2UuaWQpfT5cclxuICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgPE1lc3NhZ2VGb3JtIGFkZE1lc3NhZ2U9e2FkZE1lc3NhZ2V9IHN4PXt7YmFja2dyb3VuZENvbG9yOiAncmVkJ319Lz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJQYXBlciIsIk1lc3NhZ2VGb3JtIiwiSWNvbkJ1dHRvbiIsIkRlbGV0ZUljb24iLCJheGlvcyIsImdldFVzZXJEYXRhIiwiQm94IiwiSW5mb3JtYXRpb24iLCJtZXNzYWdlcyIsIm1lc3NhZ2VzU3RhdGUiLCJzZXRNZXNzYWdlc1N0YXRlIiwidXNlU3RhdGUiLCJhZGRNZXNzYWdlIiwibmV3TWVzc2FnZSIsImNsZWFuTWVzc2FnZXMiLCJwdXNoIiwiZGVsZXRlTWVzc2FnZSIsImRlbGV0ZWRNZXNzYWdlSWQiLCJtYXAiLCJtZXNzYWdlIiwiaWQiLCJkZWxldGVSZXF1ZXN0IiwibWVzc2FnZUlkIiwidXNlckRhdGEiLCJ0b2tlbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXJsIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVzcG9uc2VFcnIiLCJjb25zb2xlIiwibG9nIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsIm1heEhlaWdodCIsIm1heFdpZHRoIiwibWFyZ2luVG9wIiwiY29tcG9uZW50Iiwic3RpY2t5SGVhZGVyIiwic2l6ZSIsImFyaWEtbGFiZWwiLCJmb250V2VpZ2h0IiwiYWxpZ24iLCJib3JkZXIiLCJzY29wZSIsInVzZXJuYW1lIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MessageBoard.js\n"));

/***/ })

});