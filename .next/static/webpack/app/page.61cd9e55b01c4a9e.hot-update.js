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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_CountdownTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CountdownTimer */ \"(app-pages-browser)/./components/CountdownTimer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [audio, setAudio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State to store audio object\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // State to track if audio is playing\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const audioInstance = new Audio(\"/asian-new-year-celebration.mp3\");\n        audioInstance.loop = true;\n        setAudio(audioInstance);\n        // Cleanup the audio when the component is unmounted\n        return ()=>{\n            audioInstance.pause();\n            audioInstance.currentTime = 0;\n        };\n    }, []);\n    // Function to start the audio\n    const playAudio = ()=>{\n        if (audio) {\n            audio.play().then(()=>{\n                setIsPlaying(true);\n            }).catch((error)=>{\n                console.log(\"Audio playback failed:\", error);\n            });\n        }\n    };\n    // Function to stop the audio\n    const stopAudio = ()=>{\n        if (audio) {\n            audio.pause();\n            audio.currentTime = 0;\n            setIsPlaying(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen bg-gradient-to-b from-red-100 to-yellow-200 flex flex-col items-center justify-center px-6 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-800 mb-6 sm:mb-8 text-center text-shadow\",\n                children: \"Lunar New Year 2025 Countdown\"\n            }, void 0, false, {\n                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl max-w-xl w-full flex flex-col items-center justify-center  mb-6 sm:mb-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CountdownTimer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-red-800 text-center font-semibold italic\",\n                children: \"Celebrating the Year of the Snake \\uD83D\\uDC0D\"\n            }, void 0, false, {\n                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center space-x-4 mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: playAudio,\n                        disabled: isPlaying,\n                        className: \"bg-green-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition duration-300 ease-in-out\",\n                        children: \"Play Music\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: stopAudio,\n                        disabled: !isPlaying,\n                        className: \"bg-red-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-800 transition duration-300 ease-in-out\",\n                        children: \"Stop Music\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"https://vu93.vercel.app/vn\",\n                className: \"link-button bg-red-700 text-white py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-red-800 transition duration-300 ease-in-out mt-8\",\n                children: \"Join the Celebration\"\n            }, void 0, false, {\n                fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anhvungo/Downloads/project 3/app/page.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lvZzWIaNNxVGpEOzIIfWZiFJF1k=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU0QztBQUNmO0FBQzZCO0FBRTNDLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsT0FBTyw4QkFBOEI7SUFDeEUsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLFFBQVEscUNBQXFDO0lBRXhGRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLGdCQUFnQixJQUFJQyxNQUFNO1FBQ2hDRCxjQUFjRSxJQUFJLEdBQUc7UUFDckJMLFNBQVNHO1FBRVQsb0RBQW9EO1FBQ3BELE9BQU87WUFDTEEsY0FBY0csS0FBSztZQUNuQkgsY0FBY0ksV0FBVyxHQUFHO1FBQzlCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsOEJBQThCO0lBQzlCLE1BQU1DLFlBQVk7UUFDaEIsSUFBSVQsT0FBTztZQUNUQSxNQUFNVSxJQUFJLEdBQUdDLElBQUksQ0FBQztnQkFDaEJSLGFBQWE7WUFDZixHQUFHUyxLQUFLLENBQUMsQ0FBQ0M7Z0JBQ1JDLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJGO1lBQ3hDO1FBQ0Y7SUFDRjtJQUVBLDZCQUE2QjtJQUM3QixNQUFNRyxZQUFZO1FBQ2hCLElBQUloQixPQUFPO1lBQ1RBLE1BQU1PLEtBQUs7WUFDWFAsTUFBTVEsV0FBVyxHQUFHO1lBQ3BCTCxhQUFhO1FBQ2Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWdIOzs7Ozs7MEJBRzlILDhEQUFDRTtnQkFBSUYsV0FBVTswQkFDYiw0RUFBQ3BCLGtFQUFjQTs7Ozs7Ozs7OzswQkFFakIsOERBQUN1QjtnQkFBRUgsV0FBVTswQkFBNkY7Ozs7OzswQkFLMUcsOERBQUNFO2dCQUFJRixXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQ0NDLFNBQVNkO3dCQUNUZSxVQUFVdEI7d0JBQ1ZnQixXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNJO3dCQUNDQyxTQUFTUDt3QkFDVFEsVUFBVSxDQUFDdEI7d0JBQ1hnQixXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7MEJBS0gsOERBQUNyQixpREFBSUE7Z0JBQ0g0QixNQUFLO2dCQUNMUCxXQUFVOzBCQUNYOzs7Ozs7Ozs7Ozs7QUFLUDtHQTFFd0JuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ291bnRkb3duVGltZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGRvd25UaW1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthdWRpbywgc2V0QXVkaW9dID0gdXNlU3RhdGUobnVsbCk7IC8vIFN0YXRlIHRvIHN0b3JlIGF1ZGlvIG9iamVjdFxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTdGF0ZSB0byB0cmFjayBpZiBhdWRpbyBpcyBwbGF5aW5nXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhdWRpb0luc3RhbmNlID0gbmV3IEF1ZGlvKCcvYXNpYW4tbmV3LXllYXItY2VsZWJyYXRpb24ubXAzJyk7XG4gICAgYXVkaW9JbnN0YW5jZS5sb29wID0gdHJ1ZTtcbiAgICBzZXRBdWRpbyhhdWRpb0luc3RhbmNlKTtcblxuICAgIC8vIENsZWFudXAgdGhlIGF1ZGlvIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYXVkaW9JbnN0YW5jZS5wYXVzZSgpO1xuICAgICAgYXVkaW9JbnN0YW5jZS5jdXJyZW50VGltZSA9IDA7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHN0YXJ0IHRoZSBhdWRpb1xuICBjb25zdCBwbGF5QXVkaW8gPSAoKSA9PiB7XG4gICAgaWYgKGF1ZGlvKSB7XG4gICAgICBhdWRpby5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQXVkaW8gcGxheWJhY2sgZmFpbGVkOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBzdG9wIHRoZSBhdWRpb1xuICBjb25zdCBzdG9wQXVkaW8gPSAoKSA9PiB7XG4gICAgaWYgKGF1ZGlvKSB7XG4gICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgICAgc2V0SXNQbGF5aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYiBmcm9tLXJlZC0xMDAgdG8teWVsbG93LTIwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTEyIHNtOnB4LTggbWQ6cHgtMTIgbGc6cHgtMTYgeGw6cHgtMjBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBzbTp0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCBsZzp0ZXh0LTd4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXJlZC04MDAgbWItNiBzbTptYi04IHRleHQtY2VudGVyIHRleHQtc2hhZG93XCI+XG4gICAgICAgIEx1bmFyIE5ldyBZZWFyIDIwMjUgQ291bnRkb3duXG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgc206cC04IG1kOnAtMTAgbGc6cC0xMiByb3VuZGVkLTN4bCBzaGFkb3ctMnhsIG1heC13LXhsIHctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgbWItNiBzbTptYi04XCI+XG4gICAgICAgIDxDb3VudGRvd25UaW1lciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHNtOm10LTYgdGV4dC14bCBzbTp0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCB0ZXh0LXJlZC04MDAgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZCBpdGFsaWNcIj5cbiAgICAgICAgQ2VsZWJyYXRpbmcgdGhlIFllYXIgb2YgdGhlIFNuYWtlIPCfkI1cbiAgICAgIDwvcD5cbiAgICAgIFxuICAgICAgey8qIFBsYXkgLyBTdG9wIEF1ZGlvIEJ1dHRvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTQgbXQtOFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17cGxheUF1ZGlvfVxuICAgICAgICAgIGRpc2FibGVkPXtpc1BsYXlpbmd9IC8vIERpc2FibGUgcGxheSBidXR0b24gaWYgYXVkaW8gaXMgYWxyZWFkeSBwbGF5aW5nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNzAwIHRleHQtd2hpdGUgcHktMyBweC02IHJvdW5kZWQtbGcgc2hhZG93LW1kIGhvdmVyOmJnLWdyZWVuLTgwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXG4gICAgICAgID5cbiAgICAgICAgICBQbGF5IE11c2ljXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17c3RvcEF1ZGlvfVxuICAgICAgICAgIGRpc2FibGVkPXshaXNQbGF5aW5nfSAvLyBEaXNhYmxlIHN0b3AgYnV0dG9uIGlmIGF1ZGlvIGlzIG5vdCBwbGF5aW5nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTcwMCB0ZXh0LXdoaXRlIHB5LTMgcHgtNiByb3VuZGVkLWxnIHNoYWRvdy1tZCBob3ZlcjpiZy1yZWQtODAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgPlxuICAgICAgICAgIFN0b3AgTXVzaWNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdnU5My52ZXJjZWwuYXBwL3ZuXCJcbiAgICAgICAgY2xhc3NOYW1lPVwibGluay1idXR0b24gYmctcmVkLTcwMCB0ZXh0LXdoaXRlIHB5LTMgcHgtNiBzbTpweC04IHJvdW5kZWQtbGcgc2hhZG93LW1kIGhvdmVyOmJnLXJlZC04MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgbXQtOFwiXG4gICAgICA+XG4gICAgICAgIEpvaW4gdGhlIENlbGVicmF0aW9uXG4gICAgICA8L0xpbms+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkNvdW50ZG93blRpbWVyIiwiSG9tZSIsImF1ZGlvIiwic2V0QXVkaW8iLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJhdWRpb0luc3RhbmNlIiwiQXVkaW8iLCJsb29wIiwicGF1c2UiLCJjdXJyZW50VGltZSIsInBsYXlBdWRpbyIsInBsYXkiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdG9wQXVkaW8iLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJkaXYiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});