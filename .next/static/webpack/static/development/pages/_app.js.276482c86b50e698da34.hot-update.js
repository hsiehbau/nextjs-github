webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../store/store */ "./store/store.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_10___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a.Footer; // icon 不能直接加样式,,这样的话每次都是用同一个样式，而不是每次渲染重新声明一个方法

var githubIconStyle = {
  color: "white",
  fontSize: 40,
  display: "block",
  paddingTop: 30,
  marginRight: 20
};
var footerStyle = {
  textAlign: "center"
};

function MyLayout(_ref) {
  var children = _ref.children,
      user = _ref.user,
      logout = _ref.logout,
      router = _ref.router;

  // console.log(children);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      search = _useState[0],
      setSearch = _useState[1]; // useCallback只依赖setSearch，setSearch不会变的话，空数组和加了setSearch的效果一样


  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (evt) {
    setSearch(evt.target.value);
  }, [setSearch]);
  var handleOnSearch = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function () {
    router.push("/search?query=".concat(search));
  }, [search]);
  var handleLogout = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function () {
    logout();
  }, [logout]); // 不依赖任何props和state的内容，所以传入空数组

  var handleGoOauth = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("/prepare-auth?url=".concat(router.asPath)).then(function (resp) {
      if (resp.status === 200) {
        location.href = publicRuntimeConfig.OAUTH_URL;
      } else {
        console.log("prepare auth failed ", resp);
      }
    })["catch"](function (err) {
      console.log("prepare auth failed ", err);
    });
  }, []);

  var userDropdown = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, null, __jsx("a", {
    href: "",
    onClick: handleLogout
  }, "\u767B \u51FA")));

  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx(Header, null, __jsx(_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
    renderer: __jsx("div", {
      className: "jsx-3601386244" + " " + "header-inner"
    })
  }, __jsx("div", {
    className: "jsx-3601386244" + " " + "header-left"
  }, __jsx("div", {
    className: "jsx-3601386244" + " " + "logo"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/"
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "github",
    style: githubIconStyle
  }))), __jsx("div", {
    className: "jsx-3601386244"
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Search, {
    placeholder: "\u641C\u7D22\u4ED3\u5E93",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), __jsx("div", {
    className: "jsx-3601386244" + " " + "header-right"
  }, __jsx("div", {
    className: "jsx-3601386244" + " " + "user"
  }, user && user.id ? __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    overlay: userDropdown
  }, __jsx("a", {
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    className: "jsx-3601386244"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 40,
    src: user.avatar_url
  }))) : __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "\u70B9\u51FB\u8FDB\u884C\u767B\u5F55"
  }, __jsx("a", {
    href: "/prepare-auth?url=".concat(router.asPath) // onClick={handleGoOauth}
    ,
    className: "jsx-3601386244"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 40,
    icon: "user"
  }))))))), __jsx(Content, null, " indexlalalal"), __jsx(Footer, {
    style: footerStyle
  }, "develop by dabao @", __jsx("a", {
    href: "mailto:pistar@foxmail.com ",
    className: "jsx-3601386244"
  }, "pistar@foxmail.com")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1779721377"
  }, ".content.jsx-3601386244{color:red;}.header-inner.jsx-3601386244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-3601386244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxHaXRIdWJcXG5leHRqcy1wcm9qZWN0XFxjb21wb25lbnRzXFxMYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStIa0IsQUFHcUIsQUFJRyxBQUtBLFVBUmYsZ0VBSWdDLEFBS0gseUdBQzdCLFVBTEEiLCJmaWxlIjoiRDpcXEdpdEh1YlxcbmV4dGpzLXByb2plY3RcXGNvbXBvbmVudHNcXExheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgTGF5b3V0LFxyXG4gIEljb24sXHJcbiAgSW5wdXQsXHJcbiAgQXZhdGFyLFxyXG4gIFRvb2x0aXAsXHJcbiAgRHJvcGRvd24sXHJcbiAgTWVudVxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xyXG5cclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XHJcbi8vIGljb24g5LiN6IO955u05o6l5Yqg5qC35byPLCzov5nmoLfnmoTor53mr4/mrKHpg73mmK/nlKjlkIzkuIDkuKrmoLflvI/vvIzogIzkuI3mmK/mr4/mrKHmuLLmn5Pph43mlrDlo7DmmI7kuIDkuKrmlrnms5VcclxuY29uc3QgZ2l0aHViSWNvblN0eWxlID0ge1xyXG4gIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgZm9udFNpemU6IDQwLFxyXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICBwYWRkaW5nVG9wOiAzMCxcclxuICBtYXJnaW5SaWdodDogMjBcclxufTtcclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXHJcbn07XHJcbmZ1bmN0aW9uIE15TGF5b3V0KHsgY2hpbGRyZW4sIHVzZXIsIGxvZ291dCwgcm91dGVyIH0pIHtcclxuICAvLyBjb25zb2xlLmxvZyhjaGlsZHJlbik7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIHVzZUNhbGxiYWNr5Y+q5L6d6LWWc2V0U2VhcmNo77yMc2V0U2VhcmNo5LiN5Lya5Y+Y55qE6K+d77yM56m65pWw57uE5ZKM5Yqg5LqGc2V0U2VhcmNo55qE5pWI5p6c5LiA5qC3XHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICBldnQgPT4ge1xyXG4gICAgICBzZXRTZWFyY2goZXZ0LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgW3NldFNlYXJjaF1cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVPblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoP3F1ZXJ5PSR7c2VhcmNofWApO1xyXG4gIH0sIFtzZWFyY2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgbG9nb3V0KCk7XHJcbiAgfSwgW2xvZ291dF0pO1xyXG4gIC8vIOS4jeS+nei1luS7u+S9lXByb3Bz5ZKMc3RhdGXnmoTlhoXlrrnvvIzmiYDku6XkvKDlhaXnqbrmlbDnu4RcclxuICBjb25zdCBoYW5kbGVHb09hdXRoID0gdXNlQ2FsbGJhY2soZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAvcHJlcGFyZS1hdXRoP3VybD0ke3JvdXRlci5hc1BhdGh9YClcclxuICAgICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3Auc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBwdWJsaWNSdW50aW1lQ29uZmlnLk9BVVRIX1VSTDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJwcmVwYXJlIGF1dGggZmFpbGVkIFwiLCByZXNwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJlcGFyZSBhdXRoIGZhaWxlZCBcIiwgZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB1c2VyRHJvcGRvd24gPSAoXHJcbiAgICA8TWVudT5cclxuICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICA8YSBocmVmPVwiXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgIOeZuyDlh7pcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxDb250YWluZXIgcmVuZGVyZXI9ezxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCIgLz59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT1cImdpdGh1YlwiIHN0eWxlPXtnaXRodWJJY29uU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuaQnOe0ouS7k+W6k1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAge3VzZXIgJiYgdXNlci5pZCA/IChcclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXt1c2VyRHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBzcmM9e3VzZXIuYXZhdGFyX3VybH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLngrnlh7vov5vooYznmbvlvZVcIj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3ByZXBhcmUtYXV0aD91cmw9JHtyb3V0ZXIuYXNQYXRofWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17aGFuZGxlR29PYXV0aH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IGljb249XCJ1c2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8Q29udGVudD4gaW5kZXhsYWxhbGFsPC9Db250ZW50PlxyXG4gICAgICA8Rm9vdGVyIHN0eWxlPXtmb290ZXJTdHlsZX0+XHJcbiAgICAgICAgZGV2ZWxvcCBieSBkYWJhbyBAXHJcbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpwaXN0YXJAZm94bWFpbC5jb20gXCI+cGlzdGFyQGZveG1haWwuY29tPC9hPlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1sZWZ0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICNfX25leHQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFudC1sYXlvdXQge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbnQtbGF5b3V0LWhlYWRlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFudC1sYXlvdXQtY29udGVudCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IHN0YXRlLnVzZXJcclxuICAgIH07XHJcbiAgfSxcclxuICBmdW5jdGlvbiBtYXBSZWR1Y2VyKGRpc3BhdGNoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsb2dvdXQ6ICgpID0+IGRpc3BhdGNoKGxvZ291dCgpKVxyXG4gICAgfTtcclxuICB9XHJcbikod2l0aFJvdXRlcihNeUxheW91dCkpO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\GitHub\\\\nextjs-project\\\\components\\\\Layout.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1387765772"
  }, "#__next{height:100%;}.ant-layout{min-height:100%;}.ant-layout-header{padding-left:0;padding-right:0;}.ant-layout-content{background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxHaXRIdWJcXG5leHRqcy1wcm9qZWN0XFxjb21wb25lbnRzXFxMYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJeUIsQUFHdUIsQUFJSSxBQUlELEFBS1EsWUFaekIsR0FRa0IsQ0FKbEIsT0FTQSxRQUpBIiwiZmlsZSI6IkQ6XFxHaXRIdWJcXG5leHRqcy1wcm9qZWN0XFxjb21wb25lbnRzXFxMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIExheW91dCxcclxuICBJY29uLFxyXG4gIElucHV0LFxyXG4gIEF2YXRhcixcclxuICBUb29sdGlwLFxyXG4gIERyb3Bkb3duLFxyXG4gIE1lbnVcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcclxuXHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciB9ID0gTGF5b3V0O1xyXG4vLyBpY29uIOS4jeiDveebtOaOpeWKoOagt+W8jyws6L+Z5qC355qE6K+d5q+P5qyh6YO95piv55So5ZCM5LiA5Liq5qC35byP77yM6ICM5LiN5piv5q+P5qyh5riy5p+T6YeN5paw5aOw5piO5LiA5Liq5pa55rOVXHJcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIGZvbnRTaXplOiA0MCxcclxuICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgcGFkZGluZ1RvcDogMzAsXHJcbiAgbWFyZ2luUmlnaHQ6IDIwXHJcbn07XHJcbmNvbnN0IGZvb3RlclN0eWxlID0ge1xyXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG59O1xyXG5mdW5jdGlvbiBNeUxheW91dCh7IGNoaWxkcmVuLCB1c2VyLCBsb2dvdXQsIHJvdXRlciB9KSB7XHJcbiAgLy8gY29uc29sZS5sb2coY2hpbGRyZW4pO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvLyB1c2VDYWxsYmFja+WPquS+nei1lnNldFNlYXJjaO+8jHNldFNlYXJjaOS4jeS8muWPmOeahOivne+8jOepuuaVsOe7hOWSjOWKoOS6hnNldFNlYXJjaOeahOaViOaenOS4gOagt1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgZXZ0ID0+IHtcclxuICAgICAgc2V0U2VhcmNoKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIFtzZXRTZWFyY2hdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChgL3NlYXJjaD9xdWVyeT0ke3NlYXJjaH1gKTtcclxuICB9LCBbc2VhcmNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGxvZ291dCgpO1xyXG4gIH0sIFtsb2dvdXRdKTtcclxuICAvLyDkuI3kvp3otZbku7vkvZVwcm9wc+WSjHN0YXRl55qE5YaF5a6577yM5omA5Lul5Lyg5YWl56m65pWw57uEXHJcbiAgY29uc3QgaGFuZGxlR29PYXV0aCA9IHVzZUNhbGxiYWNrKGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgL3ByZXBhcmUtYXV0aD91cmw9JHtyb3V0ZXIuYXNQYXRofWApXHJcbiAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gcHVibGljUnVudGltZUNvbmZpZy5PQVVUSF9VUkw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJlcGFyZSBhdXRoIGZhaWxlZCBcIiwgcmVzcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByZXBhcmUgYXV0aCBmYWlsZWQgXCIsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdXNlckRyb3Bkb3duID0gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICDnmbsg5Ye6XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8Q29udGFpbmVyIHJlbmRlcmVyPXs8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiIC8+fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJnaXRodWJcIiBzdHlsZT17Z2l0aHViSWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0LlNlYXJjaFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLmkJzntKLku5PlupNcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17aGFuZGxlT25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxyXG4gICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuaWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17dXNlckRyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gc3JjPXt1c2VyLmF2YXRhcl91cmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi54K55Ye76L+b6KGM55m75b2VXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcmVwYXJlLWF1dGg/dXJsPSR7cm91dGVyLmFzUGF0aH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2hhbmRsZUdvT2F1dGh9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPENvbnRlbnQ+IGluZGV4bGFsYWxhbDwvQ29udGVudD5cclxuICAgICAgPEZvb3RlciBzdHlsZT17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgIGRldmVsb3AgYnkgZGFiYW8gQFxyXG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86cGlzdGFyQGZveG1haWwuY29tIFwiPnBpc3RhckBmb3htYWlsLmNvbTwvYT5cclxuICAgICAgPC9Gb290ZXI+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItbGVmdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbnQtbGF5b3V0IHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYW50LWxheW91dC1oZWFkZXIge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbnQtbGF5b3V0LWNvbnRlbnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIGZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiBzdGF0ZS51c2VyXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgZnVuY3Rpb24gbWFwUmVkdWNlcihkaXNwYXRjaCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbG9nb3V0OiAoKSA9PiBkaXNwYXRjaChsb2dvdXQoKSlcclxuICAgIH07XHJcbiAgfVxyXG4pKHdpdGhSb3V0ZXIoTXlMYXlvdXQpKTtcclxuIl19 */\n/*@ sourceURL=D:\\\\GitHub\\\\nextjs-project\\\\components\\\\Layout.jsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(function mapState(state) {
  return {
    user: state.user
  };
}, function mapReducer(dispatch) {
  return {
    logout: function logout() {
      return dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_15__["logout"])());
    }
  };
})(Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(MyLayout)));

/***/ }),

/***/ "./components/PageLoading.jsx":
/*!************************************!*\
  !*** ./components/PageLoading.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "jsx-3386369423" + " " + "root"
  }, __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3386369423"
  }, ".root.jsx-3386369423{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(255,255,255,0.3);z-index:10001;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxHaXRIdWJcXG5leHRqcy1wcm9qZWN0XFxjb21wb25lbnRzXFxQYWdlTG9hZGluZy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBR3dCLGVBQ1IsT0FDRCxNQUNFLFFBQ0MsU0FDMkIsaUNBQ3RCLGNBQ0QsMEVBQ00sNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6IkQ6XFxHaXRIdWJcXG5leHRqcy1wcm9qZWN0XFxjb21wb25lbnRzXFxQYWdlTG9hZGluZy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcGluIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgIDxTcGluIC8+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5yb290IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICB6LWluZGV4OiAxMDAwMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuIl19 */\n/*@ sourceURL=D:\\\\GitHub\\\\nextjs-project\\\\components\\\\PageLoading.jsx */"));
});

/***/ }),

/***/ "./node_modules/antd/lib/spin/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/spin/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _debounce = _interopRequireDefault(__webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var SpinSizes = (0, _type.tuple)('small', 'default', 'large'); // Render indicator

var defaultIndicator = null;

function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = "".concat(prefixCls, "-dot");

  if (React.isValidElement(indicator)) {
    return React.cloneElement(indicator, {
      className: (0, _classnames["default"])(indicator.props.className, dotClassName)
    });
  }

  if (React.isValidElement(defaultIndicator)) {
    return React.cloneElement(defaultIndicator, {
      className: (0, _classnames["default"])(defaultIndicator.props.className, dotClassName)
    });
  }

  return React.createElement("span", {
    className: (0, _classnames["default"])(dotClassName, "".concat(prefixCls, "-dot-spin"))
  }, React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }));
}

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

var Spin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Spin, _React$Component);

  function Spin(props) {
    var _this;

    _classCallCheck(this, Spin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spin).call(this, props));

    _this.debouncifyUpdateSpinning = function (props) {
      var _ref = props || _this.props,
          delay = _ref.delay;

      if (delay) {
        _this.cancelExistingSpin();

        _this.updateSpinning = (0, _debounce["default"])(_this.originalUpdateSpinning, delay);
      }
    };

    _this.updateSpinning = function () {
      var spinning = _this.props.spinning;
      var currentSpinning = _this.state.spinning;

      if (currentSpinning !== spinning) {
        _this.setState({
          spinning: spinning
        });
      }
    };

    _this.renderSpin = function (_ref2) {
      var _classNames;

      var getPrefixCls = _ref2.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          size = _a.size,
          tip = _a.tip,
          wrapperClassName = _a.wrapperClassName,
          style = _a.style,
          restProps = __rest(_a, ["prefixCls", "className", "size", "tip", "wrapperClassName", "style"]);

      var spinning = _this.state.spinning;
      var prefixCls = getPrefixCls('spin', customizePrefixCls);
      var spinClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-spinning"), spinning), _defineProperty(_classNames, "".concat(prefixCls, "-show-text"), !!tip), _classNames), className); // fix https://fb.me/react-unknown-prop

      var divProps = (0, _omit["default"])(restProps, ['spinning', 'delay', 'indicator']);
      var spinElement = React.createElement("div", _extends({}, divProps, {
        style: style,
        className: spinClassName
      }), renderIndicator(prefixCls, _this.props), tip ? React.createElement("div", {
        className: "".concat(prefixCls, "-text")
      }, tip) : null);

      if (_this.isNestedPattern()) {
        var containerClassName = (0, _classnames["default"])("".concat(prefixCls, "-container"), _defineProperty({}, "".concat(prefixCls, "-blur"), spinning));
        return React.createElement("div", _extends({}, divProps, {
          className: (0, _classnames["default"])("".concat(prefixCls, "-nested-loading"), wrapperClassName)
        }), spinning && React.createElement("div", {
          key: "loading"
        }, spinElement), React.createElement("div", {
          className: containerClassName,
          key: "container"
        }, _this.props.children));
      }

      return spinElement;
    };

    var spinning = props.spinning,
        delay = props.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    _this.state = {
      spinning: spinning && !shouldBeDelayed
    };
    _this.originalUpdateSpinning = _this.updateSpinning;

    _this.debouncifyUpdateSpinning(props);

    return _this;
  }

  _createClass(Spin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSpinning();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.debouncifyUpdateSpinning();
      this.updateSpinning();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelExistingSpin();
    }
  }, {
    key: "cancelExistingSpin",
    value: function cancelExistingSpin() {
      var updateSpinning = this.updateSpinning;

      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    }
  }, {
    key: "isNestedPattern",
    value: function isNestedPattern() {
      return !!(this.props && this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderSpin);
    }
  }], [{
    key: "setDefaultIndicator",
    value: function setDefaultIndicator(indicator) {
      defaultIndicator = indicator;
    }
  }]);

  return Spin;
}(React.Component);

Spin.defaultProps = {
  spinning: true,
  size: 'default',
  wrapperClassName: ''
};
Spin.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  spinning: PropTypes.bool,
  size: PropTypes.oneOf(SpinSizes),
  wrapperClassName: PropTypes.string,
  indicator: PropTypes.element
};
var _default = Spin;
exports["default"] = _default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _lib_my_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/my-context */ "./lib/my-context.js");
/* harmony import */ var _lib_with_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/with-redux */ "./lib/with-redux.js");
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/PageLoading */ "./components/PageLoading.jsx");









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;
// 本文件是用来修改nextjs默认环境的地方，每个页面都回去渲染这个组件，这是个渲染组件，
// import App from "next/app";










var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      context: "value",
      loading: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "startLoading", function () {
      _this.setState({
        loading: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "stopLoading", function () {
      _this.setState({
        loading: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.events.on("routeChangeStart", this.startLoading);
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.events.on("routeChangeComplete", this.stopLoading);
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.events.on("routeChangeError", this.stopLoading);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.events.off("routeChangeStart", this.startLoading);
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.events.off("routeChangeComplete", this.stopLoading);
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.events.off("routeChangeError", this.stopLoading);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore; // console.log(Component, pageProps);

      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: reduxStore
      }, __jsx(_components_PageLoading__WEBPACK_IMPORTED_MODULE_17__["default"], null), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], null, this.state.loading ? __jsx(_components_PageLoading__WEBPACK_IMPORTED_MODULE_17__["default"], null) : null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/"
      }, __jsx("a", null, "index")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/detail"
      }, __jsx("a", null, "detail")), __jsx(Component, pageProps))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(ctx) {
      var Component, pageProps;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Component = ctx.Component;
              console.log("app init");
              pageProps = {};

              if (!Component.getInitialProps) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

            case 6:
              pageProps = _context.sent;

            case 7:
              return _context.abrupt("return", {
                pageProps: pageProps
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_redux__WEBPACK_IMPORTED_MODULE_16__["default"])(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.276482c86b50e698da34.hot-update.js.map