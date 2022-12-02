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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Information; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/esm/Table/index.js\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TableBody */ \"./node_modules/@mui/material/esm/TableBody/index.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TableCell */ \"./node_modules/@mui/material/esm/TableCell/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/esm/TableContainer/index.js\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TableHead */ \"./node_modules/@mui/material/esm/TableHead/index.js\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TableRow */ \"./node_modules/@mui/material/esm/TableRow/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/esm/Paper/index.js\");\n/* harmony import */ var _MessageInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageInput */ \"./components/MessageInput.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _myMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myMethods */ \"./components/myMethods.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Information(param) {\n    let { messages  } = param;\n    _s();\n    const [messagesState, setMessagesState] = react__WEBPACK_IMPORTED_MODULE_1__.useState(messages);\n    const addMessage = (newMessage)=>{\n        const cleanMessages = [\n            ...messagesState\n        ];\n        cleanMessages.push(newMessage);\n        setMessagesState(cleanMessages);\n    };\n    const deleteMessage = (deletedMessageId)=>{\n        let cleanMessages = [];\n        messagesState.map((message)=>{\n            if (message.id != deletedMessageId) {\n                cleanMessages.push(message);\n            }\n        });\n        setMessagesState(cleanMessages);\n    };\n    const deleteRequest = (messageId)=>{\n        const userData = (0,_myMethods__WEBPACK_IMPORTED_MODULE_4__.getUserData)();\n        const { token  } = userData;\n        const headers = {\n            \"Content-Type\": \"application/json\",\n            \"Accept\": \"application/json\",\n            Authorization: \"Bearer \".concat(token)\n        };\n        try {\n            (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                url: \"http://127.0.0.1:8000/information/\".concat(messageId),\n                method: \"DELETE\",\n                headers: headers\n            }).then((response)=>{\n                //if username and password exist\n                if (response.status > 200 && response.status < 400) {\n                    deleteMessage(messageId);\n                }\n            });\n        } catch (responseErr) {\n            console.log(responseErr);\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            maxHeight: \"100px\",\n            backgroundColor: \"rgba(255,255,255,0.9)\",\n            maxWidth: \"500px\",\n            marginTop: \"10px\"\n        },\n        component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            stickyHeader: true,\n            size: \"small\",\n            \"aria-label\": \"a dense table\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        fontWeight: \"bold\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                children: \"User\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                align: \"right\",\n                                children: \"Message\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    children: messagesState.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            sx: {\n                                \"&:last-child td, &:last-child th\": {\n                                    border: 0\n                                }\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    component: \"th\",\n                                    scope: \"row\",\n                                    children: message.username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    align: \"right\",\n                                    children: [\n                                        message.message,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                            variant: \"contained\",\n                                            onClick: ()=>deleteRequest(message.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, message.id, true, {\n                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Information, \"CMDISR1DPCEkGyFJjPVBYJwjwIk=\");\n_c = Information;\nvar _c;\n$RefreshReg$(_c, \"Information\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlUm93JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xyXG5pbXBvcnQgTWVzc2FnZUZvcm0gZnJvbSAnLi9NZXNzYWdlSW5wdXQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGdldFVzZXJEYXRhIH0gZnJvbSAnLi9teU1ldGhvZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb3JtYXRpb24oIHttZXNzYWdlc30gKSB7XHJcbiAgY29uc3QgW21lc3NhZ2VzU3RhdGUsIHNldE1lc3NhZ2VzU3RhdGVdID0gUmVhY3QudXNlU3RhdGUobWVzc2FnZXMpXHJcblxyXG4gIGNvbnN0IGFkZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc3QgY2xlYW5NZXNzYWdlcyA9IFsuLi5tZXNzYWdlc1N0YXRlXVxyXG4gICAgY2xlYW5NZXNzYWdlcy5wdXNoKG5ld01lc3NhZ2UpXHJcbiAgICBzZXRNZXNzYWdlc1N0YXRlKGNsZWFuTWVzc2FnZXMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVNZXNzYWdlID0gKGRlbGV0ZWRNZXNzYWdlSWQpID0+IHtcclxuICAgIGxldCBjbGVhbk1lc3NhZ2VzID0gW11cclxuICBcclxuICAgIG1lc3NhZ2VzU3RhdGUubWFwKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlLmlkICE9IGRlbGV0ZWRNZXNzYWdlSWQpIHtcclxuICAgICAgICBjbGVhbk1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBcclxuICAgIHNldE1lc3NhZ2VzU3RhdGUoY2xlYW5NZXNzYWdlcylcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVSZXF1ZXN0ID0gKG1lc3NhZ2VJZCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBnZXRVc2VyRGF0YSgpXHJcbiAgICBjb25zdCB7dG9rZW59ID0gdXNlckRhdGFcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIHVybDogYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9pbmZvcm1hdGlvbi8ke21lc3NhZ2VJZH1gLFxyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAvL2lmIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBleGlzdFxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPiAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICBkZWxldGVNZXNzYWdlKG1lc3NhZ2VJZClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIH0gY2F0Y2ggKHJlc3BvbnNlRXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRXJyKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZUNvbnRhaW5lciBzeD17e21heEhlaWdodDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjkpJyAsIG1heFdpZHRoOiAnNTAwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgPFRhYmxlIHN0aWNreUhlYWRlciBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwiYSBkZW5zZSB0YWJsZVwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQgc3g9e3sgZm9udFdlaWdodDogJ2JvbGQnfX0+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+VXNlcjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5NZXNzYWdlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICB7bWVzc2FnZXNTdGF0ZS5tYXAoKG1lc3NhZ2UpID0+IChcclxuICAgICAgICAgICAgPFRhYmxlUm93XHJcbiAgICAgICAgICAgICAga2V5PXttZXNzYWdlLmlkfVxyXG4gICAgICAgICAgICAgIHN4PXt7ICcmOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aCc6IHsgYm9yZGVyOiAwIH0gfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2UudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e21lc3NhZ2UubWVzc2FnZX1cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17KCk9PmRlbGV0ZVJlcXVlc3QobWVzc2FnZS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICBcclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiUGFwZXIiLCJNZXNzYWdlRm9ybSIsIkljb25CdXR0b24iLCJEZWxldGVJY29uIiwiYXhpb3MiLCJnZXRVc2VyRGF0YSIsIkluZm9ybWF0aW9uIiwibWVzc2FnZXMiLCJtZXNzYWdlc1N0YXRlIiwic2V0TWVzc2FnZXNTdGF0ZSIsInVzZVN0YXRlIiwiYWRkTWVzc2FnZSIsIm5ld01lc3NhZ2UiLCJjbGVhbk1lc3NhZ2VzIiwicHVzaCIsImRlbGV0ZU1lc3NhZ2UiLCJkZWxldGVkTWVzc2FnZUlkIiwibWFwIiwibWVzc2FnZSIsImlkIiwiZGVsZXRlUmVxdWVzdCIsIm1lc3NhZ2VJZCIsInVzZXJEYXRhIiwidG9rZW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVybCIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInJlc3BvbnNlRXJyIiwiY29uc29sZSIsImxvZyIsInN4IiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwibWF4V2lkdGgiLCJtYXJnaW5Ub3AiLCJjb21wb25lbnQiLCJzdGlja3lIZWFkZXIiLCJzaXplIiwiYXJpYS1sYWJlbCIsImZvbnRXZWlnaHQiLCJhbGlnbiIsImJvcmRlciIsInNjb3BlIiwidXNlcm5hbWUiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MessageBoard.js\n"));

/***/ })

});