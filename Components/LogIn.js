"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utility = require("../Utility");
var react_bootstrap_1 = require("react-bootstrap");
var LogIn = /** @class */ (function (_super) {
    tslib_1.__extends(LogIn, _super);
    function LogIn(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { name: "", password: "", tip: "" };
        return _this;
    }
    LogIn.prototype.handleNameChange = function (e) {
        this.setState({ name: e.target.value });
    };
    LogIn.prototype.handlePasswordChange = function (e) {
        this.setState({ password: e.target.value });
    };
    LogIn.prototype.handleLogin = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, cardInfo;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.login(this.state.name, this.state.password)];
                    case 1:
                        data = _a.sent();
                        if (!(data == "password error")) return [3 /*break*/, 2];
                        this.setState({ tip: "登陆失败" });
                        return [3 /*break*/, 4];
                    case 2:
                        localStorage.setItem("token", data);
                        return [4 /*yield*/, Utility.getMyCard()];
                    case 3:
                        cardInfo = _a.sent();
                        localStorage.setItem("cardInfo", JSON.stringify(cardInfo));
                        this.setState({ tip: "登陆成功" });
                        document.location.href = "/";
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LogIn.prototype.componentDidMount = function () {
    };
    LogIn.prototype.render = function () {
        return React.createElement("div", { className: "column", style: { alignItems: "center", width: "100%" } },
            React.createElement("div", { className: "login-form" },
                React.createElement("p", null, "\u7528\u6237\u540D"),
                React.createElement("input", { name: "username", type: "text", id: "loginName", onChange: this.handleNameChange.bind(this), value: this.state.name, autoComplete: "username" })),
            React.createElement("div", { className: "login-form" },
                React.createElement("p", null, "\u5BC6\u7801"),
                React.createElement("input", { name: "password", type: "password", id: "loginPassword", onChange: this.handlePasswordChange.bind(this), autoComplete: "current-password" })),
            React.createElement("p", { id: "loginMessage" }, this.state.tip),
            React.createElement(react_bootstrap_1.Button, { onClick: this.handleLogin.bind(this) }, "\u767B\u5F55"),
            React.createElement("div", { style: { width: "30%", marginTop: "40px" } },
                React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, condensed: true, hover: true },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "\u8D26\u53F7"),
                            React.createElement("th", null, "\u5BC6\u7801"))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u7530\u5B50\u73FA\uFF08\u5B66\u751F\uFF09"),
                            React.createElement("td", null, "tzj")),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u5F20\u6CFD\u5B89\uFF08\u5B66\u751F\uFF09"),
                            React.createElement("td", null, "zza")),
                        React.createElement("tr", null,
                            React.createElement("td", null, "\u9648\u5CAD\uFF08\u8001\u5E08\uFF09"),
                            React.createElement("td", null, "cl")),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Vayne\uFF08\u7BA1\u7406\u5458\uFF09"),
                            React.createElement("td", null, "vayne")),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Mana\uFF08\u7BA1\u7406\u5458\uFF09"),
                            React.createElement("td", null, "mana"))))));
    };
    return LogIn;
}(React.Component));
exports.LogIn = LogIn;
