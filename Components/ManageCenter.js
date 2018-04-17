"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_bootstrap_1 = require("react-bootstrap");
var React = require("react");
var Utility = require("../Utility");
var CheckDisplay = /** @class */ (function (_super) {
    tslib_1.__extends(CheckDisplay, _super);
    function CheckDisplay(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: _this.props.data
        };
        return _this;
    }
    CheckDisplay.prototype.check = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var bid, cid;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bid = this.state.data.book.id;
                        cid = this.state.data.card.id;
                        return [4 /*yield*/, Utility.check(bid, cid)];
                    case 1:
                        _a.sent();
                        document.location.href = "/managecenter";
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckDisplay.prototype.refuse = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var bid, cid;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bid = this.state.data.book.id;
                        cid = this.state.data.card.id;
                        return [4 /*yield*/, Utility.refuse(bid, cid)];
                    case 1:
                        _a.sent();
                        document.location.href = "/managecenter";
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckDisplay.prototype.render = function () {
        return React.createElement("tr", null,
            React.createElement("td", null, this.state.data.book.id),
            React.createElement("td", null, this.state.data.book.name),
            React.createElement("td", null, this.state.data.book.author),
            React.createElement("td", null, this.state.data.book.press),
            React.createElement("td", null, this.state.data.book.year),
            React.createElement("td", null, this.state.data.book.price),
            React.createElement("td", null, this.state.data.book.stock),
            React.createElement("td", null, this.state.data.book.total),
            React.createElement("td", null, this.state.data.card.id),
            React.createElement("td", null, this.state.data.card.name),
            React.createElement("td", null, this.state.data.record.borrow_date),
            React.createElement("td", null, this.state.data.record.return_date),
            React.createElement("td", null,
                React.createElement(react_bootstrap_1.Button, { onClick: this.check.bind(this) }, "\u901A\u8FC7")),
            React.createElement("td", null,
                React.createElement(react_bootstrap_1.Button, { onClick: this.refuse.bind(this) }, "\u62D2\u7EDD")));
    };
    return CheckDisplay;
}(React.Component));
exports.CheckDisplay = CheckDisplay;
var ManageCenter = /** @class */ (function (_super) {
    tslib_1.__extends(ManageCenter, _super);
    function ManageCenter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { books: [] };
        return _this;
    }
    ManageCenter.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.getUnacceptedBooks()];
                    case 1:
                        data = _a.sent();
                        this.setState({ books: data });
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageCenter.prototype.update = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.getUnacceptedBooks()];
                    case 1:
                        data = _a.sent();
                        console.log("123124");
                        this.setState({ books: data });
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageCenter.prototype.convert = function (data) {
        return React.createElement(CheckDisplay, { update: this.update, data: data });
    };
    ManageCenter.prototype.render = function () {
        return React.createElement("div", { className: "column result", style: { alignSelf: "center", width: "1200px" } },
            React.createElement(react_bootstrap_1.Table, null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "\u4E66\u53F7"),
                        React.createElement("th", null, "\u4E66\u540D"),
                        React.createElement("th", null, "\u4F5C\u8005"),
                        React.createElement("th", null, "\u51FA\u7248\u793E"),
                        React.createElement("th", null, "\u5E74\u4EFD"),
                        React.createElement("th", null, "\u4EF7\u683C"),
                        React.createElement("th", null, "\u5E93\u5B58"),
                        React.createElement("th", null, "\u603B\u91CF"),
                        React.createElement("th", null, "\u501F\u4E66\u8BC1\u53F7"),
                        React.createElement("th", null, "\u501F\u4E66\u4EBA\u59D3\u540D"),
                        React.createElement("th", null, "\u501F\u4E66\u65F6\u95F4"),
                        React.createElement("th", null, "\u8FD8\u4E66\u65F6\u95F4"),
                        React.createElement("th", null, "\u64CD\u4F5C"),
                        React.createElement("th", null, "\u64CD\u4F5C"))),
                React.createElement("tbody", null, this.state.books.map(this.convert.bind(this)))));
    };
    return ManageCenter;
}(React.Component));
exports.ManageCenter = ManageCenter;
