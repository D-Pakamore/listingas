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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Information; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Table */ \"./node_modules/@mui/material/esm/Table/index.js\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TableBody */ \"./node_modules/@mui/material/esm/TableBody/index.js\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/TableCell */ \"./node_modules/@mui/material/esm/TableCell/index.js\");\n/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TableContainer */ \"./node_modules/@mui/material/esm/TableContainer/index.js\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TableHead */ \"./node_modules/@mui/material/esm/TableHead/index.js\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TableRow */ \"./node_modules/@mui/material/esm/TableRow/index.js\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Paper */ \"./node_modules/@mui/material/esm/Paper/index.js\");\n/* harmony import */ var _MessageInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageInput */ \"./components/MessageInput.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/esm/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _myMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myMethods */ \"./components/myMethods.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Information(param) {\n    let { messages  } = param;\n    _s();\n    const [messagesState, setMessagesState] = react__WEBPACK_IMPORTED_MODULE_1__.useState(messages);\n    const addMessage = (newMessage)=>{\n        const cleanMessages = [\n            ...messagesState\n        ];\n        cleanMessages.push(newMessage);\n        setMessagesState(cleanMessages);\n    };\n    const deleteMessage = (deletedMessageId)=>{\n        let cleanMessages = [];\n        messagesState.map((message)=>{\n            if (message.id != deletedMessageId) {\n                cleanMessages.push(message);\n            }\n        });\n        setMessagesState(cleanMessages);\n    };\n    const deleteRequest = (messageId)=>{\n        const userData = (0,_myMethods__WEBPACK_IMPORTED_MODULE_4__.getUserData)();\n        const { token  } = userData;\n        const headers = {\n            \"Content-Type\": \"application/json\",\n            \"Accept\": \"application/json\",\n            Authorization: \"Bearer \".concat(token)\n        };\n        try {\n            (0,axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                url: \"http://127.0.0.1:8000/information/\".concat(messageId),\n                method: \"DELETE\",\n                headers: headers\n            }).then((response)=>{\n                //if username and password exist\n                if (response.status > 200 && response.status < 400) {\n                    deleteMessage(messageId);\n                }\n            });\n        } catch (responseErr) {\n            console.log(responseErr);\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            backgroundColor: \"rgba(255,255,255,0.9)\",\n            maxWidth: \"500px\",\n            marginTop: \"10px\"\n        },\n        component: _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    ma\n                },\n                size: \"small\",\n                \"aria-label\": \"a dense table\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        sx: {\n                            fontWeight: \"bold\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: \"User\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    align: \"right\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        children: messagesState.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                sx: {\n                                    \"&:last-child td, &:last-child th\": {\n                                        border: 0\n                                    }\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        component: \"th\",\n                                        scope: \"row\",\n                                        children: message.username\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        align: \"right\",\n                                        children: [\n                                            message.message,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                variant: \"contained\",\n                                                onClick: ()=>deleteRequest(message.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 17\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, message.id, true, {\n                                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                addMessage: addMessage,\n                sx: {\n                    backgroundColor: \"red\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\projects\\\\Javascript\\\\listingas\\\\frontend\\\\listingas\\\\components\\\\MessageBoard.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Information, \"CMDISR1DPCEkGyFJjPVBYJwjwIk=\");\n_c = Information;\nvar _c;\n$RefreshReg$(_c, \"Information\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lc3NhZ2VCb2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUErQjtBQUNTO0FBQ1E7QUFDQTtBQUNVO0FBQ1Y7QUFDRjtBQUNOO0FBQ0M7QUFDUztBQUNFO0FBQzFCO0FBQ2dCO0FBRTNCLFNBQVNhLFlBQWEsS0FBVSxFQUFHO1FBQWIsRUFBQ0MsU0FBUSxFQUFDLEdBQVY7O0lBQ25DLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdoQiwyQ0FBYyxDQUFDYztJQUV6RCxNQUFNSSxhQUFhLENBQUNDLGFBQWU7UUFDakMsTUFBTUMsZ0JBQWdCO2VBQUlMO1NBQWM7UUFDeENLLGNBQWNDLElBQUksQ0FBQ0Y7UUFDbkJILGlCQUFpQkk7SUFDbkI7SUFFQSxNQUFNRSxnQkFBZ0IsQ0FBQ0MsbUJBQXFCO1FBQzFDLElBQUlILGdCQUFnQixFQUFFO1FBRXRCTCxjQUFjUyxHQUFHLENBQUMsQ0FBQ0MsVUFBWTtZQUM3QixJQUFJQSxRQUFRQyxFQUFFLElBQUlILGtCQUFrQjtnQkFDbENILGNBQWNDLElBQUksQ0FBQ0k7WUFDckIsQ0FBQztRQUNIO1FBRUFULGlCQUFpQkk7SUFDbkI7SUFFQSxNQUFNTyxnQkFBZ0IsQ0FBQ0MsWUFBYztRQUNuQyxNQUFNQyxXQUFXakIsdURBQVdBO1FBQzVCLE1BQU0sRUFBQ2tCLE1BQUssRUFBQyxHQUFHRDtRQUNoQixNQUFNRSxVQUFVO1lBQ2QsZ0JBQWdCO1lBQ2hCLFVBQVU7WUFDVkMsZUFBZSxVQUFnQixPQUFORjtRQUMzQjtRQUVBLElBQUk7WUFDRm5CLGlEQUFLQSxDQUFDO2dCQUNKc0IsS0FBSyxxQ0FBK0MsT0FBVkw7Z0JBQzFDTSxRQUFRO2dCQUNSSCxTQUFTQTtZQUNYLEdBQ0NJLElBQUksQ0FBQyxDQUFDQyxXQUFhO2dCQUNsQixnQ0FBZ0M7Z0JBQ2hDLElBQUlBLFNBQVNDLE1BQU0sR0FBRyxPQUFPRCxTQUFTQyxNQUFNLEdBQUcsS0FBSztvQkFDbERmLGNBQWNNO2dCQUNoQixDQUFDO1lBQ0w7UUFDQSxFQUFFLE9BQU9VLGFBQWE7WUFDcEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDs7SUFDRjtJQUVBLHFCQUNFLDhEQUFDbEMsb0VBQWNBO1FBQUNxQyxJQUFJO1lBQUVDLGlCQUFpQjtZQUEwQkMsVUFBVTtZQUFTQyxXQUFXO1FBQU87UUFBR0MsV0FBV3RDLDJEQUFLQTs7MEJBQ3ZILDhEQUFDTiwyREFBS0E7Z0JBQUN3QyxJQUFJO29CQUFFSztnQkFBRTtnQkFBR0MsTUFBSztnQkFBUUMsY0FBVzs7a0NBQ3hDLDhEQUFDM0MsK0RBQVNBO3dCQUFDb0MsSUFBSTs0QkFBRVEsWUFBWTt3QkFBTTtrQ0FDakMsNEVBQUMzQyw4REFBUUE7OzhDQUNQLDhEQUFDSCxnRUFBU0E7OENBQUM7Ozs7Ozs4Q0FDWCw4REFBQ0EsZ0VBQVNBO29DQUFDK0MsT0FBTTs4Q0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzdCLDhEQUFDaEQsZ0VBQVNBO2tDQUNQYSxjQUFjUyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2xCLDhEQUFDbkIsOERBQVFBO2dDQUVQbUMsSUFBSTtvQ0FBRSxvQ0FBb0M7d0NBQUVVLFFBQVE7b0NBQUU7Z0NBQUU7O2tEQUV4RCw4REFBQ2hELGdFQUFTQTt3Q0FBQzBDLFdBQVU7d0NBQUtPLE9BQU07a0RBQzdCM0IsUUFBUTRCLFFBQVE7Ozs7OztrREFFbkIsOERBQUNsRCxnRUFBU0E7d0NBQUMrQyxPQUFNOzs0Q0FBU3pCLFFBQVFBLE9BQU87MERBQ3pDLDhEQUFDaEIsaUVBQVVBO2dEQUFDNkMsU0FBUTtnREFBWUMsU0FBUyxJQUFJNUIsY0FBY0YsUUFBUUMsRUFBRTswREFDbkUsNEVBQUNoQixtRUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQVJSZSxRQUFRQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQWV2Qiw4REFBQ2xCLHFEQUFXQTtnQkFBQ1UsWUFBWUE7Z0JBQVl1QixJQUFJO29CQUFDQyxpQkFBaUI7Z0JBQUs7Ozs7Ozs7Ozs7OztBQUd0RSxDQUFDO0dBN0V1QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVzc2FnZUJvYXJkLmpzPzlhNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFibGVSb3cnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9QYXBlcic7XHJcbmltcG9ydCBNZXNzYWdlRm9ybSBmcm9tICcuL01lc3NhZ2VJbnB1dCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZ2V0VXNlckRhdGEgfSBmcm9tICcuL215TWV0aG9kcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvcm1hdGlvbigge21lc3NhZ2VzfSApIHtcclxuICBjb25zdCBbbWVzc2FnZXNTdGF0ZSwgc2V0TWVzc2FnZXNTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShtZXNzYWdlcylcclxuXHJcbiAgY29uc3QgYWRkTWVzc2FnZSA9IChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zdCBjbGVhbk1lc3NhZ2VzID0gWy4uLm1lc3NhZ2VzU3RhdGVdXHJcbiAgICBjbGVhbk1lc3NhZ2VzLnB1c2gobmV3TWVzc2FnZSlcclxuICAgIHNldE1lc3NhZ2VzU3RhdGUoY2xlYW5NZXNzYWdlcylcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZU1lc3NhZ2UgPSAoZGVsZXRlZE1lc3NhZ2VJZCkgPT4ge1xyXG4gICAgbGV0IGNsZWFuTWVzc2FnZXMgPSBbXVxyXG4gIFxyXG4gICAgbWVzc2FnZXNTdGF0ZS5tYXAoKG1lc3NhZ2UpID0+IHtcclxuICAgICAgaWYgKG1lc3NhZ2UuaWQgIT0gZGVsZXRlZE1lc3NhZ2VJZCkge1xyXG4gICAgICAgIGNsZWFuTWVzc2FnZXMucHVzaChtZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIFxyXG4gICAgc2V0TWVzc2FnZXNTdGF0ZShjbGVhbk1lc3NhZ2VzKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVJlcXVlc3QgPSAobWVzc2FnZUlkKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IGdldFVzZXJEYXRhKClcclxuICAgIGNvbnN0IHt0b2tlbn0gPSB1c2VyRGF0YVxyXG4gICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgdXJsOiBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2luZm9ybWF0aW9uLyR7bWVzc2FnZUlkfWAsXHJcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vaWYgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIGV4aXN0XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZUlkKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgfSBjYXRjaCAocmVzcG9uc2VFcnIpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VFcnIpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC45KScgLCBtYXhXaWR0aDogJzUwMHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX0gY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgIDxUYWJsZSBzeD17eyBtYX19IHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJhIGRlbnNlIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZCBzeD17eyBmb250V2VpZ2h0OiAnYm9sZCd9fT5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5Vc2VyPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPk1lc3NhZ2U8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHttZXNzYWdlc1N0YXRlLm1hcCgobWVzc2FnZSkgPT4gKFxyXG4gICAgICAgICAgICA8VGFibGVSb3dcclxuICAgICAgICAgICAgICBrZXk9e21lc3NhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgc3g9e3sgJyY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoJzogeyBib3JkZXI6IDAgfSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZS51c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57bWVzc2FnZS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXsoKT0+ZGVsZXRlUmVxdWVzdChtZXNzYWdlLmlkKX0+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgICA8TWVzc2FnZUZvcm0gYWRkTWVzc2FnZT17YWRkTWVzc2FnZX0gc3g9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX0vPlxyXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiUGFwZXIiLCJNZXNzYWdlRm9ybSIsIkljb25CdXR0b24iLCJEZWxldGVJY29uIiwiYXhpb3MiLCJnZXRVc2VyRGF0YSIsIkluZm9ybWF0aW9uIiwibWVzc2FnZXMiLCJtZXNzYWdlc1N0YXRlIiwic2V0TWVzc2FnZXNTdGF0ZSIsInVzZVN0YXRlIiwiYWRkTWVzc2FnZSIsIm5ld01lc3NhZ2UiLCJjbGVhbk1lc3NhZ2VzIiwicHVzaCIsImRlbGV0ZU1lc3NhZ2UiLCJkZWxldGVkTWVzc2FnZUlkIiwibWFwIiwibWVzc2FnZSIsImlkIiwiZGVsZXRlUmVxdWVzdCIsIm1lc3NhZ2VJZCIsInVzZXJEYXRhIiwidG9rZW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVybCIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInJlc3BvbnNlRXJyIiwiY29uc29sZSIsImxvZyIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwibWF4V2lkdGgiLCJtYXJnaW5Ub3AiLCJjb21wb25lbnQiLCJtYSIsInNpemUiLCJhcmlhLWxhYmVsIiwiZm9udFdlaWdodCIsImFsaWduIiwiYm9yZGVyIiwic2NvcGUiLCJ1c2VybmFtZSIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MessageBoard.js\n"));

/***/ })

});