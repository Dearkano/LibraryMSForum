"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utility = require("../Utility");
var react_bootstrap_1 = require("react-bootstrap");
var MyBookDisplay = /** @class */ (function (_super) {
    tslib_1.__extends(MyBookDisplay, _super);
    function MyBookDisplay(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            bookState: { returnDate: "2018-4-30", borrowState: 0 },
            data: _this.props.data
        };
        return _this;
    }
    MyBookDisplay.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var bookState;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.bookState(this.props.data.book.id)];
                    case 1:
                        bookState = _a.sent();
                        this.setState({ bookState: bookState });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyBookDisplay.prototype.borrow = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!localStorage.getItem("token")) {
                            alert("请先登录！");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Utility.borrow(this.props.data.book.id)];
                    case 1:
                        _a.sent();
                        document.location.href = "/mybook";
                        return [2 /*return*/];
                }
            });
        });
    };
    MyBookDisplay.prototype.returnBook = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.returnBook(this.props.data.book.id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Utility.getSingleBook(this.props.data.book.name)];
                    case 2:
                        _a.sent();
                        document.location.href = "/mybook";
                        return [2 /*return*/];
                }
            });
        });
    };
    MyBookDisplay.prototype.render = function () {
        console.log(this.state.data);
        var bs = "success";
        if (this.state.bookState.borrowState == 1)
            bs = "warning";
        if (this.state.bookState.borrowState == 2)
            bs = "info";
        return React.createElement("tr", null,
            React.createElement("td", null, this.state.data.book.id),
            React.createElement("td", null, this.state.data.book.name),
            React.createElement("td", null, this.state.data.book.author),
            React.createElement("td", null, this.state.data.book.press),
            React.createElement("td", null, this.state.data.book.year),
            React.createElement("td", null, this.state.data.book.price),
            React.createElement("td", null, this.state.data.book.stock),
            React.createElement("td", null, this.state.data.book.total),
            React.createElement("td", null, this.state.data.record.borrow_date),
            React.createElement("td", null, this.state.data.record.return_date),
            React.createElement("td", null,
                React.createElement(react_bootstrap_1.Button, { style: { width: "80px" }, bsStyle: this.state.data.book.stock == 0 ? "danger" : bs, disabled: this.state.data.book.stock == 0 && this.state.bookState.borrowState == 0 || this.state.bookState.borrowState == 2 ? true : false, onClick: this.state.bookState.borrowState == 1 ? this.returnBook.bind(this) : this.borrow.bind(this) }, this.state.bookState.borrowState == 0 ? "借阅" : this.state.bookState.borrowState == 1 ? "还书" : "待审核")));
    };
    return MyBookDisplay;
}(React.Component));
exports.MyBookDisplay = MyBookDisplay;
var MyBook = /** @class */ (function (_super) {
    tslib_1.__extends(MyBook, _super);
    function MyBook(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { books: [] };
        return _this;
    }
    MyBook.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.getMyBooks()];
                    case 1:
                        data = _a.sent();
                        this.setState({ books: data });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyBook.prototype.convert = function (book) {
        return React.createElement(MyBookDisplay, { data: book });
    };
    MyBook.prototype.render = function () {
        return React.createElement("div", { className: "column result", style: { alignSelf: "center" } },
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
                        React.createElement("th", null, "\u501F\u4E66\u65E5\u671F"),
                        React.createElement("th", null, "\u8FD8\u4E66\u65E5\u671F"),
                        React.createElement("th", null, "\u64CD\u4F5C"))),
                React.createElement("tbody", null, this.state.books.map(this.convert.bind(this)))));
    };
    return MyBook;
}(React.Component));
exports.MyBook = MyBook;
