"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_CountdownTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CountdownTimer */ \"(app-pages-browser)/./components/CountdownTimer.tsx\");\n/* harmony import */ var _barrel_optimize_names_Disc3_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Disc3!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/disc-3.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [audio, setAudio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State to store audio object\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // State to track if audio is playing\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const audioInstance = new Audio(\"/asian-new-year-celebration.mp3\");\n        audioInstance.loop = true;\n        setAudio(audioInstance);\n        // Cleanup the audio when the component is unmounted\n        return ()=>{\n            if (audioInstance) {\n                audioInstance.pause();\n                audioInstance.currentTime = 0;\n            }\n        };\n    }, []);\n    // Function to toggle play and stop the audio\n    const toggleAudio = ()=>{\n        if (audio) {\n            if (isPlaying) {\n                audio.pause();\n                audio.currentTime = 0;\n                setIsPlaying(false);\n            } else {\n                audio.play().then(()=>{\n                    setIsPlaying(true);\n                }).catch((error)=>{\n                    console.log(\"Audio playback failed:\", error);\n                });\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen bg-gradient-to-b from-red-100 to-yellow-200 flex flex-col items-center justify-center px-6 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-800 mb-6 sm:mb-8 text-center text-shadow\",\n                children: \"Lunar New Year 2025 Countdown\"\n            }, void 0, false, {\n                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl max-w-xl w-full flex flex-col items-center justify-center border-4 border-yellow-500 mb-6 sm:mb-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CountdownTimer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-red-800 text-center font-semibold italic\",\n                children: \"Celebrating the Year of the Snake \\uD83D\\uDC0D\"\n            }, void 0, false, {\n                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center space-x-4 mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleAudio,\n                    className: \"bg-green-700 text-white py-3 px-6 rounded-lg shadow-md \".concat(isPlaying ? \"bg-green-600 animate-pulse shadow-lg\" : \"hover:bg-green-800\"),\n                    children: isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Disc3_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"animate-spin\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Music Playing\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this) : \"Play Music\"\n                }, void 0, false, {\n                    fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"https://vu93.vercel.app/vn\",\n                className: \"link-button bg-red-700 text-white py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-red-800 transition duration-300 ease-in-out mt-8\",\n                children: \"Join the Celebration\"\n            }, void 0, false, {\n                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lvZzWIaNNxVGpEOzIIfWZiFJF1k=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDZjtBQUM2QjtBQUNyQjtBQUV0QixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDLE9BQU8sOEJBQThCO0lBQ3hFLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxRQUFRLHFDQUFxQztJQUV4RkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxnQkFBZ0IsSUFBSUMsTUFBTTtRQUNoQ0QsY0FBY0UsSUFBSSxHQUFHO1FBQ3JCTCxTQUFTRztRQUVULG9EQUFvRDtRQUNwRCxPQUFPO1lBQ0wsSUFBSUEsZUFBZTtnQkFDakJBLGNBQWNHLEtBQUs7Z0JBQ25CSCxjQUFjSSxXQUFXLEdBQUc7WUFDOUI7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLDZDQUE2QztJQUM3QyxNQUFNQyxjQUFjO1FBQ2xCLElBQUlULE9BQU87WUFDVCxJQUFJRSxXQUFXO2dCQUNiRixNQUFNTyxLQUFLO2dCQUNYUCxNQUFNUSxXQUFXLEdBQUc7Z0JBQ3BCTCxhQUFhO1lBQ2YsT0FBTztnQkFDTEgsTUFBTVUsSUFBSSxHQUFHQyxJQUFJLENBQUM7b0JBQ2hCUixhQUFhO2dCQUNmLEdBQUdTLEtBQUssQ0FBQyxDQUFDQztvQkFDUkMsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkY7Z0JBQ3hDO1lBQ0Y7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBZ0g7Ozs7OzswQkFHOUgsOERBQUNFO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDcEIsa0VBQWNBOzs7Ozs7Ozs7OzBCQUVqQiw4REFBQ3VCO2dCQUFFSCxXQUFVOzBCQUE2Rjs7Ozs7OzBCQUsxRyw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQ2IsNEVBQUNJO29CQUNDQyxTQUFTYjtvQkFDVFEsV0FBVywwREFFVixPQURDZixZQUFZLHlDQUF5Qzs4QkFHdERBLDBCQUNDLDhEQUFDcUI7d0JBQUtOLFdBQVU7OzBDQUVkLDhEQUFDbkIsaUZBQUtBO2dDQUFDbUIsV0FBVTs7Ozs7OzBDQUNqQiw4REFBQ007MENBQUs7Ozs7Ozs7Ozs7OytCQUdSOzs7Ozs7Ozs7OzswQkFLTiw4REFBQzNCLGlEQUFJQTtnQkFDSDRCLE1BQUs7Z0JBQ0xQLFdBQVU7MEJBQ1g7Ozs7Ozs7Ozs7OztBQUtQO0dBM0V3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ291bnRkb3duVGltZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGRvd25UaW1lcic7XG5pbXBvcnQgeyBEaXNjMyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthdWRpbywgc2V0QXVkaW9dID0gdXNlU3RhdGUobnVsbCk7IC8vIFN0YXRlIHRvIHN0b3JlIGF1ZGlvIG9iamVjdFxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTdGF0ZSB0byB0cmFjayBpZiBhdWRpbyBpcyBwbGF5aW5nXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhdWRpb0luc3RhbmNlID0gbmV3IEF1ZGlvKCcvYXNpYW4tbmV3LXllYXItY2VsZWJyYXRpb24ubXAzJyk7XG4gICAgYXVkaW9JbnN0YW5jZS5sb29wID0gdHJ1ZTtcbiAgICBzZXRBdWRpbyhhdWRpb0luc3RhbmNlKTtcblxuICAgIC8vIENsZWFudXAgdGhlIGF1ZGlvIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGF1ZGlvSW5zdGFuY2UpIHtcbiAgICAgICAgYXVkaW9JbnN0YW5jZS5wYXVzZSgpO1xuICAgICAgICBhdWRpb0luc3RhbmNlLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gRnVuY3Rpb24gdG8gdG9nZ2xlIHBsYXkgYW5kIHN0b3AgdGhlIGF1ZGlvXG4gIGNvbnN0IHRvZ2dsZUF1ZGlvID0gKCkgPT4ge1xuICAgIGlmIChhdWRpbykge1xuICAgICAgaWYgKGlzUGxheWluZykge1xuICAgICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdWRpby5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQXVkaW8gcGxheWJhY2sgZmFpbGVkOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1yZWQtMTAwIHRvLXllbGxvdy0yMDAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS0xMiBzbTpweC04IG1kOnB4LTEyIGxnOnB4LTE2IHhsOnB4LTIwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgc206dGV4dC01eGwgbWQ6dGV4dC02eGwgbGc6dGV4dC03eGwgZm9udC1leHRyYWJvbGQgdGV4dC1yZWQtODAwIG1iLTYgc206bWItOCB0ZXh0LWNlbnRlciB0ZXh0LXNoYWRvd1wiPlxuICAgICAgICBMdW5hciBOZXcgWWVhciAyMDI1IENvdW50ZG93blxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHNtOnAtOCBtZDpwLTEwIGxnOnAtMTIgcm91bmRlZC0zeGwgc2hhZG93LTJ4bCBtYXgtdy14bCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLTQgYm9yZGVyLXllbGxvdy01MDAgbWItNiBzbTptYi04XCI+XG4gICAgICAgIDxDb3VudGRvd25UaW1lciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHNtOm10LTYgdGV4dC14bCBzbTp0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCB0ZXh0LXJlZC04MDAgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCBpdGFsaWNcIj5cbiAgICAgICAgQ2VsZWJyYXRpbmcgdGhlIFllYXIgb2YgdGhlIFNuYWtlIPCfkI1cbiAgICAgIDwvcD5cblxuICAgICAgey8qIFBsYXkvU3RvcCBBdWRpbyBCdXR0b24gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC00IG10LThcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUF1ZGlvfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIHB5LTMgcHgtNiByb3VuZGVkLWxnIHNoYWRvdy1tZCAke1xuICAgICAgICAgICAgaXNQbGF5aW5nID8gJ2JnLWdyZWVuLTYwMCBhbmltYXRlLXB1bHNlIHNoYWRvdy1sZycgOiAnaG92ZXI6YmctZ3JlZW4tODAwJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAge2lzUGxheWluZyA/IChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICB7LyogU3Bpbm5pbmcgVmlueWwgUmVjb3JkIEFuaW1hdGlvbiAqL31cbiAgICAgICAgICAgICAgPERpc2MzIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPk11c2ljIFBsYXlpbmc8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICdQbGF5IE11c2ljJ1xuICAgICAgICAgICl9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL3Z1OTMudmVyY2VsLmFwcC92blwiXG4gICAgICAgIGNsYXNzTmFtZT1cImxpbmstYnV0dG9uIGJnLXJlZC03MDAgdGV4dC13aGl0ZSBweS0zIHB4LTYgc206cHgtOCByb3VuZGVkLWxnIHNoYWRvdy1tZCBob3ZlcjpiZy1yZWQtODAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IG10LThcIlxuICAgICAgPlxuICAgICAgICBKb2luIHRoZSBDZWxlYnJhdGlvblxuICAgICAgPC9MaW5rPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJDb3VudGRvd25UaW1lciIsIkRpc2MzIiwiSG9tZSIsImF1ZGlvIiwic2V0QXVkaW8iLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJhdWRpb0luc3RhbmNlIiwiQXVkaW8iLCJsb29wIiwicGF1c2UiLCJjdXJyZW50VGltZSIsInRvZ2dsZUF1ZGlvIiwicGxheSIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsImRpdiIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});