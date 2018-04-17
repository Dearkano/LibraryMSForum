"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_bootstrap_1 = require("react-bootstrap");
var React = require("react");
var Header = /** @class */ (function (_super) {
    tslib_1.__extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var isLogin = false;
        var name = "";
        if (localStorage.getItem("token")) {
            isLogin = true;
            name = JSON.parse(localStorage.getItem("cardInfo")).name;
        }
        var userCenter = null;
        if (localStorage.getItem("token") && JSON.parse(localStorage.getItem("cardInfo")).type == "管理员") {
            userCenter = React.createElement(react_bootstrap_1.NavItem, { eventKey: 1, href: "/managecenter" }, "\u7BA1\u7406\u4E2D\u5FC3");
        }
        return React.createElement("div", null,
            React.createElement(react_bootstrap_1.Navbar, { inverse: true, collapseOnSelect: true },
                React.createElement(react_bootstrap_1.Navbar.Header, null,
                    React.createElement(react_bootstrap_1.Navbar.Brand, null,
                        React.createElement("a", { href: "/" }, "\u56FE\u4E66\u7BA1\u7406\u7CFB\u7EDF")),
                    React.createElement(react_bootstrap_1.Navbar.Toggle, null)),
                React.createElement(react_bootstrap_1.Navbar.Collapse, null,
                    React.createElement(react_bootstrap_1.Nav, null,
                        React.createElement(react_bootstrap_1.NavItem, { eventKey: 1, href: "/mybook" }, "\u6211\u7684\u56FE\u4E66"),
                        React.createElement(react_bootstrap_1.NavItem, { eventKey: 2, href: "/library" }, "\u56FE\u4E66\u9986")),
                    React.createElement(react_bootstrap_1.Nav, { pullRight: true },
                        userCenter,
                        React.createElement(react_bootstrap_1.NavItem, { eventKey: 2, href: isLogin ? "/logout" : "/login" }, isLogin ? name + "/注销" : "登录")))));
    };
    return Header;
}(React.Component));
exports.Header = Header;
