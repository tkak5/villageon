webpackHotUpdate("static/development/pages/sign/signin.js",{

/***/ "./pages/sign/signin.js":
/*!******************************!*\
  !*** ./pages/sign/signin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_sign_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/sign.module.scss */ \"./styles/sign.module.scss\");\n/* harmony import */ var _styles_sign_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_initFirebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/initFirebase */ \"./components/initFirebase.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/tkak/sample/villageon/villageon/pages/sign/signin.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n\nObject(_components_initFirebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nfunction SignIn() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      mail = _useState[0],\n      setMail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      mailError = _useState3[0],\n      setMailError = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      passwordError = _useState4[0],\n      setPasswordError = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      mount = _useState5[0],\n      setMount = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      togglePassword = _useState6[0],\n      setTogglePassword = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (mount) {\n      firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.auth().onAuthStateChanged(function (user) {\n        if (user) {\n          // User is signed in.\n          if (true) {\n            next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(\"/\");\n          }\n        } else {// No user is signed in.\n        }\n      });\n    }\n\n    return function cleanup() {\n      setMount(false);\n    };\n  });\n\n  var changeMail = function changeMail(event) {\n    var mail = event.target.value;\n    setMail(mail);\n  };\n\n  var changePassword = function changePassword(event) {\n    var password = event.target.value;\n    setPassword(password);\n  };\n\n  var handleSubmit = function handleSubmit() {\n    setMailError(\"\");\n    setPasswordError(\"\");\n\n    if (!mail) {\n      setMailError(\"入力してください\");\n    }\n\n    if (!password) {\n      setPasswordError(\"入力してください\");\n    }\n\n    if (mail && password) {\n      firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.auth().signInWithEmailAndPassword(mail, password).then(function () {\n        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(\"/user/details\");\n      })[\"catch\"](function (error) {\n        if (error.code == \"auth/invalid-email\") {\n          setMailError(\"メールアドレスの形式が不正確です\");\n        } else if (error.code == \"auth/user-disabled\") {\n          setMailError(\"ユーザーが無効になっています\");\n        } else if (error.code == \"auth/user-not-found\") {\n          setMailError(\"このメールアドレスは使われていません\");\n        } else if (error.code == \"auth/wrong-password\") {\n          setPasswordError(\"パスワードが間違っています\");\n        }\n      });\n    }\n  };\n\n  var togglePasswordDisplay = function togglePasswordDisplay() {\n    setTogglePassword(!togglePassword);\n  };\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 17\n    }\n  }, \"SignIn\")), __jsx(\"article\", {\n    className: \" flex flex-col justify-center items-center bg-white w-full my-6 p-6 shadow sm:max-w-lg sm:mx-auto sm:rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 21\n    }\n  }, \"\\u30ED\\u30B0\\u30A4\\u30F3\"), __jsx(\"input\", {\n    className: \"border-solid border-2 rounded p-2 w-full outline-none max-w-sm my-1\",\n    type: \"text\",\n    placeholder: \"email\",\n    onChange: changeMail,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 21\n    }\n  }), __jsx(\"p\", {\n    className: \"text-red-600\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 21\n    }\n  }, mailError), __jsx(\"div\", {\n    className: \"border-solid border-2 rounded p-2 w-full flex max-w-sm my-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 21\n    }\n  }, __jsx(\"input\", {\n    className: \"w-4/5 outline-none\",\n    type: togglePassword ? \"text\" : \"password\",\n    placeholder: \"\\u30D1\\u30B9\\u30EF\\u30FC\\u30C9\",\n    onChange: changePassword,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 25\n    }\n  }), __jsx(\"input\", {\n    className: \"w-1/5 outline-none bg-white opacity-50\",\n    type: \"button\",\n    value: togglePassword ? \"非表示\" : \"表示\",\n    onClick: togglePasswordDisplay,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 25\n    }\n  })), __jsx(\"p\", {\n    className: \"text-red-600\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 21\n    }\n  }, passwordError), __jsx(\"input\", {\n    className: \"border-solid border-2 rounded p-2 mt-1 bg-blue-200\\u3000outline-none my-1\",\n    type: \"button\",\n    value: \"\\u30ED\\u30B0\\u30A4\\u30F3\",\n    onClick: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"flex justify-center items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 21\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/sign/signup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 25\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 29\n    }\n  }, __jsx(\"button\", {\n    className: \"border-solid border-2 rounded p-2 mt-1 bg-blue-200\\u3000outline-none my-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 32\n    }\n  }, \"\\u30A2\\u30AB\\u30A6\\u30F3\\u30C8\\u3092\\u4F5C\\u6210\\u3059\\u308B\"))))));\n}\n\n_s(SignIn, \"vDxblZAKwbOMd5pd0Kvb0AwEThM=\");\n\n_c = SignIn;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduL3NpZ25pbi5qcz80ODlkIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0RmlyZWJhc2UiLCJTaWduSW4iLCJ1c2VTdGF0ZSIsIm1haWwiLCJzZXRNYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm1haWxFcnJvciIsInNldE1haWxFcnJvciIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwibW91bnQiLCJzZXRNb3VudCIsInRvZ2dsZVBhc3N3b3JkIiwic2V0VG9nZ2xlUGFzc3dvcmQiLCJ1c2VFZmZlY3QiLCJmaXJlYmFzZSIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiUm91dGVyIiwicHVzaCIsImNsZWFudXAiLCJjaGFuZ2VNYWlsIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZVBhc3N3b3JkIiwiaGFuZGxlU3VibWl0Iiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwiZXJyb3IiLCJjb2RlIiwidG9nZ2xlUGFzc3dvcmREaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBQSxtQkFBTyxDQUFDLHFFQUFELENBQVA7O0FBRUFDLHdFQUFZO0FBRUcsU0FBU0MsTUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLEVBQUQsQ0FERjtBQUFBLE1BQ3ZCQyxJQUR1QjtBQUFBLE1BQ2pCQyxPQURpQjs7QUFBQSxtQkFFRUYsc0RBQVEsQ0FBQyxFQUFELENBRlY7QUFBQSxNQUV2QkcsUUFGdUI7QUFBQSxNQUViQyxXQUZhOztBQUFBLG1CQUdJSixzREFBUSxDQUFDLEVBQUQsQ0FIWjtBQUFBLE1BR3ZCSyxTQUh1QjtBQUFBLE1BR1pDLFlBSFk7O0FBQUEsbUJBSVlOLHNEQUFRLENBQUMsRUFBRCxDQUpwQjtB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QUFBO0FBQUE7QUFBQSxJQVhKLEVBWUk7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQVEsYUFBUyxFQUFDLDJFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQUFILENBREosQ0FESixDQVpKLENBSlIsQ0FESjtBQXlCSDs7R0F6RnVCM0IsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3BhZ2VzL3NpZ24vc2lnbmluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3NpZ24ubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgaW5pdEZpcmViYXNlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5pdEZpcmViYXNlJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIlxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJ1xucmVxdWlyZSgnZmlyZWJhc2UvYXV0aCcpXG5cbmluaXRGaXJlYmFzZSgpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbiAoKSB7XG4gICAgY29uc3QgW21haWwsIHNldE1haWxdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW21haWxFcnJvciwgc2V0TWFpbEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbbW91bnQsIHNldE1vdW50XSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW3RvZ2dsZVBhc3N3b3JkLCBzZXRUb2dnbGVQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChtb3VudCkge1xuICAgICAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlciBpcyBzaWduZWQgaW4uXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gdXNlciBpcyBzaWduZWQgaW4uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgIHNldE1vdW50KGZhbHNlKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNoYW5nZU1haWwgPSBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IG1haWwgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgc2V0TWFpbChtYWlsKVxuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VQYXNzd29yZCA9IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgc2V0UGFzc3dvcmQocGFzc3dvcmQpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgc2V0TWFpbEVycm9yKFwiXCIpXG4gICAgICAgIHNldFBhc3N3b3JkRXJyb3IoXCJcIilcbiAgICAgICAgaWYgKCFtYWlsKSB7XG4gICAgICAgICAgICBzZXRNYWlsRXJyb3IoXCLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYRcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwi5YWl5Yqb44GX44Gm44GP44Gg44GV44GEXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1haWwgJiYgcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChtYWlsLCBwYXNzd29yZCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi91c2VyL2RldGFpbHNcIilcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT0gXCJhdXRoL2ludmFsaWQtZW1haWxcIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRNYWlsRXJyb3IoXCLjg6Hjg7zjg6vjgqLjg4njg6zjgrnjga7lvaLlvI/jgYzkuI3mraPnorrjgafjgZlcIilcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLmNvZGUgPT0gXCJhdXRoL3VzZXItZGlzYWJsZWRcIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRNYWlsRXJyb3IoXCLjg6bjg7zjgrbjg7zjgYznhKHlirnjgavjgarjgaPjgabjgYTjgb7jgZlcIilcbiAgICAgICAgICAgICAgICB944CAZWxzZSBpZiAoZXJyb3IuY29kZSA9PSBcImF1dGgvdXNlci1ub3QtZm91bmRcIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRNYWlsRXJyb3IoXCLjgZPjga7jg6Hjg7zjg6vjgqLjg4njg6zjgrnjga/kvb/jgo/jgozjgabjgYTjgb7jgZvjgpNcIilcbiAgICAgICAgICAgICAgICB944CAZWxzZSBpZiAoZXJyb3IuY29kZSA9PSBcImF1dGgvd3JvbmctcGFzc3dvcmRcIikge1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKFwi44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVBhc3N3b3JkRGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgc2V0VG9nZ2xlUGFzc3dvcmQoIXRvZ2dsZVBhc3N3b3JkKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+U2lnbkluPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJcbiAgICAgICAgICAgICAgICAgICAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctd2hpdGUgdy1mdWxsIG15LTYgcC02IHNoYWRvd1xuICAgICAgICAgICAgICAgICAgICBzbTptYXgtdy1sZyBzbTpteC1hdXRvIHNtOnJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+44Ot44Kw44Kk44OzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlci1zb2xpZCBib3JkZXItMiByb3VuZGVkIHAtMiB3LWZ1bGwgb3V0bGluZS1ub25lIG1heC13LXNtIG15LTFcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBvbkNoYW5nZT17Y2hhbmdlTWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwXCI+e21haWxFcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQgcC0yIHctZnVsbCBmbGV4IG1heC13LXNtIG15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTQvNSBvdXRsaW5lLW5vbmVcIiB0eXBlPXt0b2dnbGVQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifSBwbGFjZWhvbGRlcj1cIuODkeOCueODr+ODvOODiVwiIG9uQ2hhbmdlPXtjaGFuZ2VQYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEvNSBvdXRsaW5lLW5vbmUgYmctd2hpdGUgb3BhY2l0eS01MFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT17dG9nZ2xlUGFzc3dvcmQgPyBcIumdnuihqOekulwiIDogXCLooajnpLpcIn0gb25DbGljaz17dG9nZ2xlUGFzc3dvcmREaXNwbGF5fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj57cGFzc3dvcmRFcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXItc29saWQgYm9yZGVyLTIgcm91bmRlZCBwLTIgbXQtMSBiZy1ibHVlLTIwMOOAgG91dGxpbmUtbm9uZSBteS0xXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44Ot44Kw44Kk44OzXCIgb25DbGljaz17aGFuZGxlU3VibWl0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ24vc2lnbnVwXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQgcC0yIG10LTEgYmctYmx1ZS0yMDDjgIBvdXRsaW5lLW5vbmUgbXktMlwiPuOCouOCq+OCpuODs+ODiOOCkuS9nOaIkOOBmeOCizwvYnV0dG9uPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sign/signin.js\n");

/***/ })

})