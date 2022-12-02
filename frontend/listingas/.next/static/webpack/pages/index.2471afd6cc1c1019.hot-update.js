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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Information; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/esm/Table/index.js\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TableBody */ \"./node_modules/@mui/material/esm/TableBody/index.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TableCell */ \"./node_modules/@mui/material/esm/TableCell/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/esm/TableContainer/index.js\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TableHead */ \"./node_modules/@mui/material/esm/TableHead/index.js\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TableRow */ \"./node_modules/@mui/material/esm/TableRow/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/esm/Paper/index.js\");\n/* harmony import */ var _MessageInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageInput */ \"./components/MessageInput.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _myMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myMethods */ \"./components/myMethods.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Information(param) {\n    let { messages  } = param;\n    _s();\n    const [messagesState, setMessagesState] = react__WEBPACK_IMPORTED_MODULE_1__.useState(messages);\n    const addMessage = (newMessage)=>{\n        const cleanMessages = [\n            ...messagesState\n        ];\n        cleanMessages.push(newMessage);\n        setMessagesState(cleanMessages);\n    };\n    const deleteMessage = (deletedMessageId)=>{\n        let cleanMessages = [];\n        messagesState.map((message)=>{\n            if (message.id != deletedMessageId) {\n                cleanMessages.push(message);\n            }\n        });\n        setMessagesState(cleanMessages);\n    };\n    const deleteRequest = (messageId)=>{\n        const userData = (0,_myMethods__WEBPACK_IMPORTED_MODULE_4__.getUserData)();\n        const { token  } = userData;\n        const headers = {\n            \"Content-Type\": \"application/json\",\n            \"Accept\": \"application/json\",\n            Authorization: \"Bearer \".concat(token)\n        };\n        try {\n            (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                url: \"http://127.0.0.1:8000/information/\".concat(messageId),\n                method: \"DELETE\",\n                headers: headers\n            }).then((response)=>{\n                //if username and password exist\n                if (response.status > 200 && response.status < 400) {\n                    deleteMessage(messageId);\n                }\n            });\n        } catch (responseErr) {\n            console.log(responseErr);\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            backgroundColor: \"rgba(255,255,255,0.9)\",\n            maxWidth: \"500px\",\n            marginTop: \"10px\"\n        },\n        component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                s: true,\n                size: \"small\",\n                \"aria-label\": \"a dense table\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        sx: {\n                            fontWeight: \"bold\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: \"User\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    align: \"right\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        children: messagesState.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                sx: {\n                                    \"&:last-child td, &:last-child th\": {\n                                        border: 0\n                                    }\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        component: \"th\",\n                                        scope: \"row\",\n                                        children: message.username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        align: \"right\",\n                                        children: [\n                                            message.message,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                variant: \"contained\",\n                                                onClick: ()=>deleteRequest(message.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 17\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, message.id, true, {\n                                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                addMessage: addMessage,\n                sx: {\n                    backgroundColor: \"red\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Information, \"CMDISR1DPCEkGyFJjPVBYJwjwIk=\");\n_c = Information;\nvar _c;\n$RefreshReg$(_c, \"Information\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlQm9hcmQuanM/OWE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbXVpL21hdGVyaWFsL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZVJvdyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcclxuaW1wb3J0IE1lc3NhZ2VGb3JtIGZyb20gJy4vTWVzc2FnZUlucHV0JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBnZXRVc2VyRGF0YSB9IGZyb20gJy4vbXlNZXRob2RzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9ybWF0aW9uKCB7bWVzc2FnZXN9ICkge1xyXG4gIGNvbnN0IFttZXNzYWdlc1N0YXRlLCBzZXRNZXNzYWdlc1N0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKG1lc3NhZ2VzKVxyXG5cclxuICBjb25zdCBhZGRNZXNzYWdlID0gKG5ld01lc3NhZ2UpID0+IHtcclxuICAgIGNvbnN0IGNsZWFuTWVzc2FnZXMgPSBbLi4ubWVzc2FnZXNTdGF0ZV1cclxuICAgIGNsZWFuTWVzc2FnZXMucHVzaChuZXdNZXNzYWdlKVxyXG4gICAgc2V0TWVzc2FnZXNTdGF0ZShjbGVhbk1lc3NhZ2VzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlTWVzc2FnZSA9IChkZWxldGVkTWVzc2FnZUlkKSA9PiB7XHJcbiAgICBsZXQgY2xlYW5NZXNzYWdlcyA9IFtdXHJcbiAgXHJcbiAgICBtZXNzYWdlc1N0YXRlLm1hcCgobWVzc2FnZSkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZS5pZCAhPSBkZWxldGVkTWVzc2FnZUlkKSB7XHJcbiAgICAgICAgY2xlYW5NZXNzYWdlcy5wdXNoKG1lc3NhZ2UpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXHJcbiAgICBzZXRNZXNzYWdlc1N0YXRlKGNsZWFuTWVzc2FnZXMpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlUmVxdWVzdCA9IChtZXNzYWdlSWQpID0+IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gZ2V0VXNlckRhdGEoKVxyXG4gICAgY29uc3Qge3Rva2VufSA9IHVzZXJEYXRhXHJcbiAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICB1cmw6IGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvaW5mb3JtYXRpb24vJHttZXNzYWdlSWR9YCxcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy9pZiB1c2VybmFtZSBhbmQgcGFzc3dvcmQgZXhpc3RcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID4gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgICAgZGVsZXRlTWVzc2FnZShtZXNzYWdlSWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB9IGNhdGNoIChyZXNwb25zZUVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUVycik7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXIgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjkpJyAsIG1heFdpZHRoOiAnNTAwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgPFRhYmxlIHMgc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cImEgZGVuc2UgdGFibGVcIj5cclxuICAgICAgICA8VGFibGVIZWFkIHN4PXt7IGZvbnRXZWlnaHQ6ICdib2xkJ319PlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPlVzZXI8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+TWVzc2FnZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAge21lc3NhZ2VzU3RhdGUubWFwKChtZXNzYWdlKSA9PiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgIGtleT17bWVzc2FnZS5pZH1cclxuICAgICAgICAgICAgICBzeD17eyAnJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGgnOiB7IGJvcmRlcjogMCB9IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPnttZXNzYWdlLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9eygpPT5kZWxldGVSZXF1ZXN0KG1lc3NhZ2UuaWQpfT5cclxuICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICAgIDxNZXNzYWdlRm9ybSBhZGRNZXNzYWdlPXthZGRNZXNzYWdlfSBzeD17e2JhY2tncm91bmRDb2xvcjogJ3JlZCd9fS8+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJQYXBlciIsIk1lc3NhZ2VGb3JtIiwiSWNvbkJ1dHRvbiIsIkRlbGV0ZUljb24iLCJheGlvcyIsImdldFVzZXJEYXRhIiwiSW5mb3JtYXRpb24iLCJtZXNzYWdlcyIsIm1lc3NhZ2VzU3RhdGUiLCJzZXRNZXNzYWdlc1N0YXRlIiwidXNlU3RhdGUiLCJhZGRNZXNzYWdlIiwibmV3TWVzc2FnZSIsImNsZWFuTWVzc2FnZXMiLCJwdXNoIiwiZGVsZXRlTWVzc2FnZSIsImRlbGV0ZWRNZXNzYWdlSWQiLCJtYXAiLCJtZXNzYWdlIiwiaWQiLCJkZWxldGVSZXF1ZXN0IiwibWVzc2FnZUlkIiwidXNlckRhdGEiLCJ0b2tlbiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXJsIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVzcG9uc2VFcnIiLCJjb25zb2xlIiwibG9nIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXhXaWR0aCIsIm1hcmdpblRvcCIsImNvbXBvbmVudCIsInMiLCJzaXplIiwiYXJpYS1sYWJlbCIsImZvbnRXZWlnaHQiLCJhbGlnbiIsImJvcmRlciIsInNjb3BlIiwidXNlcm5hbWUiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MessageBoard.js\n"));

/***/ })

});