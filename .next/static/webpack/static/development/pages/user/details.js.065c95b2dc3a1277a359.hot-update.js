webpackHotUpdate("static/development/pages/user/details.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteTitle, phoneNumber, mail, phoneTime, mailTime, url, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"siteTitle\", function() { return siteTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"phoneNumber\", function() { return phoneNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mail\", function() { return mail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"phoneTime\", function() { return phoneTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mailTime\", function() { return mailTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"url\", function() { return url; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.scss */ \"./components/layout.module.scss\");\n/* harmony import */ var _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive */ \"./node_modules/react-responsive/dist/react-responsive.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_initFirebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/initFirebase */ \"./components/initFirebase.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\nvar _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _jsxFileName = \"/Users/tkak/sample/villageon/villageon/components/layout.js\",\n    _s5 = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n\nObject(_components_initFirebase__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nvar siteTitle = \"villageon\";\nvar phoneNumber = \"080-8585-0777\";\nvar mail = \"villageon55@gmail.com\";\nvar phoneTime = \"10:00~18:00\";\nvar mailTime = \"24時間\";\nvar url = \"http://villageon.now.sh\";\nvar metaSentence = \"Villageonnはあなたの真剣な出会いをサポートします。たくさんの方に幸せを見つけて欲しいとの思いから、地域最安値に挑戦中。真剣な方のみ、ご参加を受け付けております。\";\n\nvar Desktop = function Desktop(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var isDesktop = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__[\"useMediaQuery\"])({\n    minWidth: 992\n  });\n  return isDesktop ? children : null;\n};\n\n_s(Desktop, \"OwvWUQgjrMnuU8GZKzxgeJ0yhK4=\", false, function () {\n  return [react_responsive__WEBPACK_IMPORTED_MODULE_4__[\"useMediaQuery\"]];\n});\n\n_c = Desktop;\n\nvar Tablet = function Tablet(_ref2) {\n  _s2();\n\n  var children = _ref2.children;\n  var isTablet = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__[\"useMediaQuery\"])({\n    minWidth: 768,\n    maxWidth: 991\n  });\n  return isTablet ? children : null;\n};\n\n_s2(Tablet, \"njizuzyQ3ji1lkog3PzXeuhAluo=\", false, function () {\n  return [react_responsive__WEBPACK_IMPORTED_MODULE_4__[\"useMediaQuery\"]];\n});\n\n_c2 = Tablet;\n\nvar Mobile = function Mobile(_ref3) {\n  _s3();\n\n  var children = _ref3.children;\n  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__[\"useMediaQuery\"])({\n    maxWidth: 767\n  });\n  return isMobile ? children : null;\n};\n\n_s3(Mobile, \"7khsyUHgctuHIPa2/KlDS6LcnT0=\", false, function () {\n  return [react_responsive__WEBPACK_IMPORTED_MODULE_4__[\"useMediaQuery\"]];\n});\n\n_c3 = Mobile;\n\nvar Default = function Default(_ref4) {\n  _s4();\n\n  var children = _ref4.children;\n  var isNotMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_4__[\"useMediaQuery\"])({\n    minWidth: 768\n  });\n  return isNotMobile ? children : null;\n};\n\n_s4(Default, \"39ICqmTSeKHbKDzaMnrZFzNNET0=\", false, function () {\n  return [react_responsive__WEBPACK_IMPORTED_MODULE_4__[\"useMediaQuery\"]];\n});\n\n_c4 = Default;\nfunction Layout(_ref5) {\n  _s5();\n\n  var children = _ref5.children,\n      home = _ref5.home;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      mount = _useState2[0],\n      setMount = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (mount) {\n      firebase_app__WEBPACK_IMPORTED_MODULE_6___default.a.auth().onAuthStateChanged(function (user) {\n        if (user) {\n          // User is signed in.\n          setUser(user);\n        } else {// No user is signed in.\n        }\n      });\n    }\n\n    return function cleanup() {\n      setMount(false);\n    };\n  });\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/images/logo-no-text.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: metaSentence,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"og:title\",\n    content: siteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:card\",\n    content: \"summary_large_image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  })), __jsx(\"header\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logoSpace,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/logo-no-text.png\",\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerImage,\n    alt: siteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 29\n    }\n  })))), __jsx(\"ul\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerItemsWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerItems,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerDisplay,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 25\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 29\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 33\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 36\n    }\n  }, \"\\u30A4\\u30D9\\u30F3\\u30C8\"))))), __jsx(\"li\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerItems,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerDisplay,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 25\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: user ? \"/user/details\" : \"/sign/signin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 29\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 33\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 36\n    }\n  }, user ? \"ユーザー情報\" : \"ログイン\"))))), __jsx(\"li\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerItems,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerDisplay,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 25\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/info/privacy\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 29\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 33\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 36\n    }\n  }, \"\\u56E3\\u4F53\\u60C5\\u5831\"))))))), __jsx(\"main\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  }, children), __jsx(\"footer\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contact,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactItems,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 21\n    }\n  }, phoneNumber), __jsx(\"p\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactTime,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 21\n    }\n  }, \"\\u53D7\\u4ED8\\u6642\\u9593: \", phoneTime), __jsx(\"p\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactItems,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 21\n    }\n  }, mail), __jsx(\"p\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactTime,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 21\n    }\n  }, \"\\u53D7\\u4ED8\\u6642\\u9593\\uFF1A \", mailTime)), __jsx(\"div\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footerInfo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.logoSpace,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 21\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 25\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 29\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/logo-no-text.png\",\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.headerImage,\n    alt: siteTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 33\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 33\n    }\n  }, \"villageon\")))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footerRight,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footerRightItems,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 25\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/info/tos\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 29\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 33\n    }\n  }, \"\\u5229\\u7528\\u898F\\u7D04\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/info/privacy\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 29\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 33\n    }\n  }, \"\\u30D7\\u30E9\\u30A4\\u30D0\\u30B7\\u30FC\\u30DD\\u30EA\\u30B7\\u30FC\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/info/transaction\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 29\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 33\n    }\n  }, \"\\u7279\\u5B9A\\u5546\\u53D6\\u5F15\\u6CD5\\u306B\\u57FA\\u3065\\u304F\\u8868\\u8A18\"))), __jsx(\"div\", {\n    className: _layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footerRightItems,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 25\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 66\n    }\n  }, \"\\xA9\\uFE0F2020 Takaaki Miwa\"))))));\n}\n\n_s5(Layout, \"WjAcVFffkSvhD54bcBN3SwpSjkw=\");\n\n_c5 = Layout;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Desktop\");\n$RefreshReg$(_c2, \"Tablet\");\n$RefreshReg$(_c3, \"Mobile\");\n$RefreshReg$(_c4, \"Default\");\n$RefreshReg$(_c5, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcz8wOWE3Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0RmlyZWJhc2UiLCJzaXRlVGl0bGUiLCJwaG9uZU51bWJlciIsIm1haWwiLCJwaG9uZVRpbWUiLCJtYWlsVGltZSIsInVybCIsIm1ldGFTZW50ZW5jZSIsIkRlc2t0b3AiLCJjaGlsZHJlbiIsImlzRGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJtaW5XaWR0aCIsIlRhYmxldCIsImlzVGFibGV0IiwibWF4V2lkdGgiLCJNb2JpbGUiLCJpc01vYmlsZSIsIkRlZmF1bHQiLCJpc05vdE1vYmlsZSIsIkxheW91dCIsImhvbWUiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwibW91bnQiLCJzZXRNb3VudCIsInVzZUVmZmVjdCIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImNsZWFudXAiLCJzdHlsZXMiLCJoZWFkZXIiLCJsb2dvU3BhY2UiLCJoZWFkZXJJbWFnZSIsImhlYWRlckl0ZW1zV3JhcHBlciIsImhlYWRlckl0ZW1zIiwiaGVhZGVyRGlzcGxheSIsIm1haW4iLCJmb290ZXIiLCJjb250YWN0IiwiY29udGFjdEl0ZW1zIiwiY29udGFjdFRpbWUiLCJmb290ZXJJbmZvIiwiZm9vdGVyUmlnaHQiLCJmb290ZXJSaWdodEl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQUEsbUJBQU8sQ0FBQyxxRUFBRCxDQUFQOztBQUVBQyx3RUFBWTtBQUVMLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxlQUFwQjtBQUNBLElBQU1DLElBQUksR0FBRyx1QkFBYjtBQUNBLElBQU1DLFNBQVMsR0FBRyxhQUFsQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxNQUFqQjtBQUNBLElB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O0FBQUE7QUFBQTtBQUFBLElBYkosRUFlSTtBQUFLLGFBQVMsRUFBRStCLDBEQUFNLENBQUNhLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRWIsMERBQU0sQ0FBQ2MsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREosQ0FESixFQUlJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRUFESixDQUpKLEVBT0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxtQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRkFESixDQVBKLENBREosRUFZSTtBQUFLLGFBQVMsRUFBRWQsMERBQU0sQ0FBQ2MsZ0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBekMsQ0FaSixDQWZKLENBUEosQ0E1REosQ0FESjtBQXFHSDs7SUEzSHVCMUIsTTs7TUFBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuc2NzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJ1xuXG5pbXBvcnQgaW5pdEZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvaW5pdEZpcmViYXNlJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIlxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJ1xucmVxdWlyZSgnZmlyZWJhc2UvYXV0aCcpXG5cbmluaXRGaXJlYmFzZSgpXG5cbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSBcInZpbGxhZ2VvblwiXG5leHBvcnQgY29uc3QgcGhvbmVOdW1iZXIgPSBcIjA4MC04NTg1LTA3NzdcIlxuZXhwb3J0IGNvbnN0IG1haWwgPSBcInZpbGxhZ2VvbjU1QGdtYWlsLmNvbVwiXG5leHBvcnQgY29uc3QgcGhvbmVUaW1lID0gXCIxMDowMH4xODowMFwiXG5leHBvcnQgY29uc3QgbWFpbFRpbWUgPSBcIjI05pmC6ZaTXCJcbmV4cG9ydCBjb25zdCB1cmwgPSBcImh0dHA6Ly92aWxsYWdlb24ubm93LnNoXCJcbmNvbnN0IG1ldGFTZW50ZW5jZSA9IFwiVmlsbGFnZW9ubuOBr+OBguOBquOBn+OBruecn+WJo+OBquWHuuS8muOBhOOCkuOCteODneODvOODiOOBl+OBvuOBmeOAguOBn+OBj+OBleOCk+OBruaWueOBq+W5uOOBm+OCkuimi+OBpOOBkeOBpuassuOBl+OBhOOBqOOBruaAneOBhOOBi+OCieOAgeWcsOWfn+acgOWuieWApOOBq+aMkeaIpuS4reOAguecn+WJo+OBquaWueOBruOBv+OAgeOBlOWPguWKoOOCkuWPl+OBkeS7mOOBkeOBpuOBiuOCiuOBvuOBmeOAglwiXG5cbmNvbnN0IERlc2t0b3AgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh7IG1pbldpZHRoOiA5OTJ9KVxuICAgIHJldHVybiBpc0Rlc2t0b3AgPyBjaGlsZHJlbiA6IG51bGxcbn1cblxuY29uc3QgVGFibGV0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGlzVGFibGV0ID0gdXNlTWVkaWFRdWVyeSh7IG1pbldpZHRoOiA3NjgsIG1heFdpZHRoOiA5OTF9KVxuICAgIHJldHVybiBpc1RhYmxldCA/IGNoaWxkcmVuIDogbnVsbFxufVxuXG5jb25zdCBNb2JpbGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHsgbWF4V2lkdGg6IDc2NyB9KVxuICAgIHJldHVybiBpc01vYmlsZSA/IGNoaWxkcmVuIDogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0ID0gKHtjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgaXNOb3RNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHttaW5XaWR0aDogNzY4fSlcbiAgICByZXR1cm4gaXNOb3RNb2JpbGUgPyBjaGlsZHJlbjogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQgKHsgY2hpbGRyZW4sIGhvbWUgfSkge1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW21vdW50LCBzZXRNb3VudF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBpZiAobW91bnQpIHtcbiAgICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIGluLlxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyKHVzZXIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gdXNlciBpcyBzaWduZWQgaW4uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgIHNldE1vdW50KGZhbHNlKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1hZ2VzL2xvZ28tbm8tdGV4dC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e21ldGFTZW50ZW5jZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb1NwYWNlfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLW5vLXRleHQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c2l0ZVRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySXRlbXNXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckl0ZW1zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyRGlzcGxheX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PHA+44Kk44OZ44Oz44OIPC9wPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJdGVtc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckRpc3BsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VzZXIgPyBcIi91c2VyL2RldGFpbHNcIiA6IFwiL3NpZ24vc2lnbmluXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT48cD57dXNlciA/IFwi44Om44O844K244O85oOF5aCxXCIgOlwi44Ot44Kw44Kk44OzXCJ9PC9wPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySXRlbXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJEaXNwbGF5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2d1aWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxwPuWPguWKoOOCrOOCpOODiS/jgojjgY/jgYLjgovos6rllY88L3A+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckl0ZW1zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyRGlzcGxheX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmZvL3ByaXZhY3lcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PHA+5Zuj5L2T5oOF5aCxPC9wPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PntjaGlsZHJlbn08L21haW4+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0fT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEl0ZW1zfT57cGhvbmVOdW1iZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0VGltZX0+5Y+X5LuY5pmC6ZaTOiB7cGhvbmVUaW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEl0ZW1zfT57bWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RUaW1lfT7lj5fku5jmmYLplpPvvJoge21haWxUaW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckluZm99PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29TcGFjZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28tbm8tdGV4dC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3NpdGVUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+dmlsbGFnZW9uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclJpZ2h0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyUmlnaHRJdGVtc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmZvL3Rvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7liKnnlKjopo/ntIQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5mby9wcml2YWN5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPuODl+ODqeOCpOODkOOCt+ODvOODneODquOCt+ODvDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmZvL3RyYW5zYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPueJueWumuWVhuWPluW8leazleOBq+WfuuOBpeOBj+ihqOiomDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyUmlnaHRJdGVtc30+PHA+wqnvuI8yMDIwIFRha2Fha2kgTWl3YTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ })

})