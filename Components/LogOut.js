"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var LogOut = /** @class */ (function (_super) {
    tslib_1.__extends(LogOut, _super);
    function LogOut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogOut.prototype.componentDidMount = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("cardInfo");
        document.location.href = "/";
    };
    LogOut.prototype.render = function () {
        return React.createElement("div", null, "\u6B63\u5728\u6CE8\u9500...");
    };
    return LogOut;
}(React.Component));
exports.LogOut = LogOut;
