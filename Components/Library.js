"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_bootstrap_1 = require("react-bootstrap");
var React = require("react");
var Utility = require("../Utility");
var BookDisplay = /** @class */ (function (_super) {
    tslib_1.__extends(BookDisplay, _super);
    function BookDisplay(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            bookState: { returnDate: "2018-4-30", borrowState: 0 },
            book: _this.props.book
        };
        return _this;
    }
    BookDisplay.prototype.borrow = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, state;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!localStorage.getItem("token")) {
                            alert("请先登录！");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Utility.borrow(this.props.book.id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Utility.getSingleBook(this.props.book.name)];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, Utility.bookState(this.props.book.id)];
                    case 3:
                        state = _a.sent();
                        this.setState({ bookState: state, book: data });
                        return [2 /*return*/];
                }
            });
        });
    };
    BookDisplay.prototype.returnBook = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, state;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.returnBook(this.props.book.id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Utility.getSingleBook(this.props.book.name)];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, Utility.bookState(this.props.book.id)];
                    case 3:
                        state = _a.sent();
                        this.setState({ bookState: state, book: data });
                        return [2 /*return*/];
                }
            });
        });
    };
    BookDisplay.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var bookState;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.bookState(this.props.book.id)];
                    case 1:
                        bookState = _a.sent();
                        this.setState({ bookState: bookState });
                        return [2 /*return*/];
                }
            });
        });
    };
    BookDisplay.prototype.componentWillReceiveProps = function (newProps) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var bookState;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.bookState(newProps.book.id)];
                    case 1:
                        bookState = _a.sent();
                        this.setState({ book: newProps.book, bookState: bookState });
                        return [2 /*return*/];
                }
            });
        });
    };
    BookDisplay.prototype.render = function () {
        var bs = "success";
        if (this.state.bookState.borrowState == 1)
            bs = "warning";
        if (this.state.bookState.borrowState == 2)
            bs = "info";
        return React.createElement("tr", null,
            React.createElement("td", null, this.state.book.id),
            React.createElement("td", null, this.state.book.name),
            React.createElement("td", null, this.state.book.author),
            React.createElement("td", null, this.state.book.press),
            React.createElement("td", null, this.state.book.year),
            React.createElement("td", null, this.state.book.price),
            React.createElement("td", null, this.state.book.stock),
            React.createElement("td", null, this.state.book.total),
            React.createElement("td", null, moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')),
            React.createElement("td", null,
                React.createElement(react_bootstrap_1.Button, { style: { width: "80px" }, bsStyle: this.state.book.stock == 0 && this.state.bookState.borrowState == 0 ? "danger" : bs, disabled: this.state.book.stock == 0 && this.state.bookState.borrowState == 0 || this.state.bookState.borrowState == 2 ? true : false, onClick: this.state.bookState.borrowState == 1 ? this.returnBook.bind(this) : this.borrow.bind(this) }, this.state.bookState.borrowState == 0 ? "借阅" : this.state.bookState.borrowState == 1 ? "还书" : "待审核")));
    };
    return BookDisplay;
}(React.Component));
exports.BookDisplay = BookDisplay;
var Library = /** @class */ (function (_super) {
    tslib_1.__extends(Library, _super);
    function Library(props) {
        var _this = _super.call(this, props) || this;
        _this.state = ({ name: "", fromprice: "", toprice: "", toyear: "", type: "", author: "", fromyear: "", press: "", books: [] });
        return _this;
    }
    Library.prototype.handleName = function (e) {
        console.log(e.target.value);
        this.setState({ name: e.target.value });
    };
    Library.prototype.handlePress = function (e) {
        this.setState({ press: e.target.value });
    };
    Library.prototype.handleAuthor = function (e) {
        this.setState({ author: e.target.value });
    };
    Library.prototype.handleFromyear = function (e) {
        this.setState({ fromyear: e.target.value });
    };
    Library.prototype.handleToyear = function (e) {
        this.setState({ toyear: e.target.value });
    };
    Library.prototype.handleFromprice = function (e) {
        this.setState({ fromprice: e.target.value });
    };
    Library.prototype.handleToprice = function (e) {
        this.setState({ toprice: e.target.value });
    };
    Library.prototype.handleType = function (e) {
        this.setState({ type: e.target.value });
    };
    Library.prototype.convert = function (book) {
        console.log("---");
        console.log(book);
        return React.createElement(BookDisplay, { book: book });
    };
    Library.prototype.search = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var book, data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isEmpty()) {
                            alert("您还没有输入任何内容！");
                            return [2 /*return*/];
                        }
                        book = {
                            name: this.state.name,
                            author: this.state.author,
                            press: this.state.press,
                            fromprice: this.state.fromprice,
                            toprice: this.state.toprice,
                            fromyear: this.state.fromyear,
                            toyear: this.state.toyear,
                            type: this.state.type
                        };
                        return [4 /*yield*/, Utility.search(book)];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        this.setState({ books: data });
                        return [2 /*return*/];
                }
            });
        });
    };
    Library.prototype.isEmpty = function () {
        if (!this.state.author && !this.state.books && !this.state.fromprice && !this.state.fromyear && !this.state.name && !this.state.press && !this.state.type && this.state.toyear && this.state.toprice)
            return true;
        else
            return false;
    };
    Library.prototype.render = function () {
        return React.createElement("div", { className: "row", style: { justifyContent: "space-around" } },
            React.createElement("div", { className: "column category" },
                React.createElement("div", { className: "row" },
                    React.createElement("label", { className: "category-label" }, "\u4E66\u540D"),
                    React.createElement("input", { type: "text", onChange: this.handleName.bind(this), value: this.state.name })),
                React.createElement("div", { className: "row" },
                    React.createElement("label", { className: "category-label" }, "\u4F5C\u8005"),
                    React.createElement("input", { type: "text", onChange: this.handleAuthor.bind(this), value: this.state.author })),
                React.createElement("div", { className: "row" },
                    React.createElement("label", { className: "category-label" }, "\u51FA\u7248\u793E"),
                    React.createElement("input", { type: "text", onChange: this.handlePress.bind(this), value: this.state.press })),
                React.createElement("div", { className: "row" },
                    React.createElement("label", { className: "category-label" }, "\u7C7B\u522B"),
                    React.createElement("input", { type: "text", onChange: this.handleType.bind(this), value: this.state.type })),
                React.createElement("div", { className: "row" },
                    React.createElement("label", { className: "category-label" }, "\u6700\u4F4E\u4EF7"),
                    React.createElement("input", { type: "text", onChange: this.handleFromprice.bind(this), value: this.state.fromprice })),
                React.createElement("div", { className: "row" },
                    React.createElement("label", { className: "category-label" }, "\u6700\u9AD8\u4EF7"),
                    React.createElement("input", { type: "text", onChange: this.handleToprice.bind(this), value: this.state.toprice })),
                React.createElement("div", { className: "row" },
                    React.createElement("label", { className: "category-label" }, "\u5E74\u4EFD\uFF08\u65E9\uFF09"),
                    React.createElement("input", { type: "text", onChange: this.handleFromyear.bind(this), value: this.state.fromyear })),
                React.createElement("div", { className: "row" },
                    React.createElement("label", { className: "category-label" }, "\u5E74\u4EFD\uFF08\u665A\uFF09"),
                    React.createElement("input", { type: "text", value: this.state.toyear, onChange: this.handleToyear.bind(this) })),
                React.createElement(react_bootstrap_1.Button, { style: { width: "250px" }, onClick: this.search.bind(this) }, "\u67E5\u8BE2")),
            React.createElement("div", { className: "column result" },
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
                            React.createElement("th", null, "\u6700\u8FD1\u5F52\u8FD8\u65F6\u95F4"))),
                    React.createElement("tbody", null, this.state.books.map(this.convert.bind(this))))));
    };
    return Library;
}(React.Component));
exports.Library = Library;
