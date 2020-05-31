webpackHotUpdate("static/development/pages/sign/signin.js",{

/***/ "./pages/sign/signin.js":
/*!******************************!*\
  !*** ./pages/sign/signin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_sign_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/sign.module.scss */ \"./styles/sign.module.scss\");\n/* harmony import */ var _styles_sign_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_initFirebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/initFirebase */ \"./components/initFirebase.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/tkak/sample/villageon/villageon/pages/sign/signin.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n\nObject(_components_initFirebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nfunction SignIn() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      mail = _useState[0],\n      setMail = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      MailError = _useState3[0],\n      setMailError = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      PasswordError = _useState4[0],\n      setPasswordError = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"sample\"),\n      error = _useState5[0],\n      setError = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      mount = _useState6[0],\n      setMount = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      togglePassword = _useState7[0],\n      setTogglePassword = _useState7[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (mount) {\n      firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.auth().onAuthStateChanged(function (user) {\n        if (user) {\n          // User is signed in.\n          if (true) {\n            next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(\"/\");\n          }\n        } else {// No user is signed in.\n        }\n      });\n    }\n\n    return function cleanup() {\n      setMount(false);\n    };\n  });\n\n  var changeMail = function changeMail(event) {\n    var mail = event.target.value;\n    setMail(mail);\n  };\n\n  var changePassword = function changePassword(event) {\n    var password = event.target.value;\n    setPassword(password);\n  };\n\n  var handleSubmit = function handleSubmit() {\n    setMailError(\"\");\n    setPasswordError(\"\");\n    firebase_app__WEBPACK_IMPORTED_MODULE_7___default.a.auth().signInWithEmailAndPassword(mail, password).then(function () {\n      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(\"/user/details\");\n    })[\"catch\"](function (error) {\n      if (error.code == \"auth/invalid-email\") {\n        setMailError(\"メールアドレスの形式が不正確です\");\n      } else if (error.code == \"auth/user-disabled\") {\n        setMailError(\"ユーザーが無効になっています\");\n      } else if (error.code == \"auth/user-not-found\") {\n        setMailError(\"このメールアドレスは使われていません\");\n      } else if (error.code == \"auth/wrong-password\") {\n        setPasswordError(\"パスワードが間違っています\");\n      }\n    });\n  };\n\n  var togglePasswordDisplay = function togglePasswordDisplay() {\n    setTogglePassword(!togglePassword);\n  };\n\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  }, \"SignIn\")), __jsx(\"article\", {\n    className: \"flex flex-col justify-center items-center bg-white w-full my-6 p-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 21\n    }\n  }, \"\\u30ED\\u30B0\\u30A4\\u30F3\"), __jsx(\"input\", {\n    className: \"border-solid border-2 rounded p-2 w-full outline-none max-w-sm my-2\",\n    type: \"text\",\n    placeholder: \"email\",\n    onChange: changeMail,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 21\n    }\n  }), __jsx(\"p\", {\n    className: \"text-center text-red-600\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 21\n    }\n  }, MailError), __jsx(\"div\", {\n    className: \"border-solid border-2 rounded p-2 w-full flex max-w-sm my-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 21\n    }\n  }, __jsx(\"input\", {\n    className: \"w-4/5 outline-none\",\n    type: togglePassword ? \"text\" : \"password\",\n    placeholder: \"\\u30D1\\u30B9\\u30EF\\u30FC\\u30C9\",\n    onChange: changePassword,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 25\n    }\n  }), __jsx(\"input\", {\n    className: \"w-1/5 outline-none bg-white opacity-50\",\n    type: \"button\",\n    value: togglePassword ? \"非表示\" : \"表示\",\n    onClick: togglePasswordDisplay,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 25\n    }\n  })), __jsx(\"p\", {\n    className: \"text-red-600 text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 21\n    }\n  }, PasswordError), __jsx(\"input\", {\n    className: \"border-solid border-2 rounded p-2 mt-1 bg-blue-200\\u3000outline-none my-2\",\n    type: \"button\",\n    value: \"\\u30ED\\u30B0\\u30A4\\u30F3\",\n    onClick: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"flex justify-center items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 21\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/sign/signup\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 25\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 29\n    }\n  }, __jsx(\"button\", {\n    className: \"border-solid border-2 rounded p-2 mt-1 bg-blue-200\\u3000outline-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 32\n    }\n  }, \"\\u30A2\\u30AB\\u30A6\\u30F3\\u30C8\\u3092\\u4F5C\\u6210\\u3059\\u308B\"))))));\n}\n\n_s(SignIn, \"ohIkr3YqZ/kCx4ilIGc3v3mDPGQ=\");\n\n_c = SignIn;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignIn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduL3NpZ25pbi5qcz80ODlkIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0RmlyZWJhc2UiLCJTaWduSW4iLCJ1c2VTdGF0ZSIsIm1haWwiLCJzZXRNYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIk1haWxFcnJvciIsInNldE1haWxFcnJvciIsIlBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwiZXJyb3IiLCJzZXRFcnJvciIsIm1vdW50Iiwic2V0TW91bnQiLCJ0b2dnbGVQYXNzd29yZCIsInNldFRvZ2dsZVBhc3N3b3JkIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsIlJvdXRlciIsInB1c2giLCJjbGVhbnVwIiwiY2hhbmdlTWFpbCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjaGFuZ2VQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsImNvZGUiLCJ0b2dnbGVQYXNzd29yZERpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0FBLG1CQUFPLENBQUMscUVBQUQsQ0FBUDs7QUFFQUMsd0VBQVk7QUFFRyxTQUFTQyxNQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ05DLHNEQUFRLENBQUMsRUFBRCxDQURGO0FBQUEsTUFDdkJDLElBRHVCO0FBQUEsTUFDakJDLE9BRGlCOztBQUFBLG1CQUVFRixzREFBUSxDQUFDLEVBQUQsQ0FGVjtBQUFBLE1BRXZCRyxRQUZ1QjtBQUFBLE1BRWJDLFdBRmE7O0FBQUEsbUJBR0lKLHNEQUFRLENBQUMsRUFBRCxDQUhaO0FBQUEsTUFHdkJLLFNBSHVCO0FBQUEsTUFHWkMsWUFIWTs7QUFBQSxtQkFJWU4sc0RBQVEsQ0FBQyxF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LEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBUSxhQUFTLEVBQUMsc0VBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0VBQUgsQ0FESixDQURKLENBVkosQ0FKUixDQURKO0FBdUJIOztHQWxGdUI3QixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vcGFnZXMvc2lnbi9zaWduaW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2lnbi5tb2R1bGUuc2NzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBpbml0RmlyZWJhc2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbml0RmlyZWJhc2UnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXG5yZXF1aXJlKCdmaXJlYmFzZS9hdXRoJylcblxuaW5pdEZpcmViYXNlKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluICgpIHtcbiAgICBjb25zdCBbbWFpbCwgc2V0TWFpbF0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtNYWlsRXJyb3IsIHNldE1haWxFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtQYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcInNhbXBsZVwiKVxuICAgIGNvbnN0IFttb3VudCwgc2V0TW91bnRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbdG9nZ2xlUGFzc3dvcmQsIHNldFRvZ2dsZVBhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG1vdW50KSB7XG4gICAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBVc2VyIGlzIHNpZ25lZCBpbi5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBObyB1c2VyIGlzIHNpZ25lZCBpbi5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgc2V0TW91bnQoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY2hhbmdlTWFpbCA9IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgbWFpbCA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICBzZXRNYWlsKG1haWwpXG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICBzZXRQYXNzd29yZChwYXNzd29yZClcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBzZXRNYWlsRXJyb3IoXCJcIilcbiAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihcIlwiKVxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQobWFpbCwgcGFzc3dvcmQpLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi91c2VyL2RldGFpbHNcIilcbiAgICAgICAgICAgIH0pLmNhdGNoKFxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PSBcImF1dGgvaW52YWxpZC1lbWFpbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1haWxFcnJvcihcIuODoeODvOODq+OCouODieODrOOCueOBruW9ouW8j+OBjOS4jeato+eiuuOBp+OBmVwiKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IuY29kZSA9PSBcImF1dGgvdXNlci1kaXNhYmxlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1haWxFcnJvcihcIuODpuODvOOCtuODvOOBjOeEoeWKueOBq+OBquOBo+OBpuOBhOOBvuOBmVwiKVxuICAgICAgICAgICAgICAgIH3jgIBlbHNlIGlmIChlcnJvci5jb2RlID09IFwiYXV0aC91c2VyLW5vdC1mb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1haWxFcnJvcihcIuOBk+OBruODoeODvOODq+OCouODieODrOOCueOBr+S9v+OCj+OCjOOBpuOBhOOBvuOBm+OCk1wiKVxuICAgICAgICAgICAgICAgIH3jgIBlbHNlIGlmIChlcnJvci5jb2RlID09IFwiYXV0aC93cm9uZy1wYXNzd29yZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkRXJyb3IoXCLjg5Hjgrnjg6/jg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZlcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVBhc3N3b3JkRGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgc2V0VG9nZ2xlUGFzc3dvcmQoIXRvZ2dsZVBhc3N3b3JkKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+U2lnbkluPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy13aGl0ZSB3LWZ1bGwgbXktNiBwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+44Ot44Kw44Kk44OzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlci1zb2xpZCBib3JkZXItMiByb3VuZGVkIHAtMiB3LWZ1bGwgb3V0bGluZS1ub25lIG1heC13LXNtIG15LTJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiBvbkNoYW5nZT17Y2hhbmdlTWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1yZWQtNjAwXCI+e01haWxFcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQgcC0yIHctZnVsbCBmbGV4IG1heC13LXNtIG15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTQvNSBvdXRsaW5lLW5vbmVcIiB0eXBlPXt0b2dnbGVQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifSBwbGFjZWhvbGRlcj1cIuODkeOCueODr+ODvOODiVwiIG9uQ2hhbmdlPXtjaGFuZ2VQYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTEvNSBvdXRsaW5lLW5vbmUgYmctd2hpdGUgb3BhY2l0eS01MFwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT17dG9nZ2xlUGFzc3dvcmQgPyBcIumdnuihqOekulwiIDogXCLooajnpLpcIn0gb25DbGljaz17dG9nZ2xlUGFzc3dvcmREaXNwbGF5fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1jZW50ZXJcIj57UGFzc3dvcmRFcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXItc29saWQgYm9yZGVyLTIgcm91bmRlZCBwLTIgbXQtMSBiZy1ibHVlLTIwMOOAgG91dGxpbmUtbm9uZSBteS0yXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44Ot44Kw44Kk44OzXCIgb25DbGljaz17aGFuZGxlU3VibWl0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ24vc2lnbnVwXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLXNvbGlkIGJvcmRlci0yIHJvdW5kZWQgcC0yIG10LTEgYmctYmx1ZS0yMDDjgIBvdXRsaW5lLW5vbmVcIj7jgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJDjgZnjgos8L2J1dHRvbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sign/signin.js\n");

/***/ })

})