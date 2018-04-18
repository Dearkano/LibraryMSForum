"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_bootstrap_1 = require("react-bootstrap");
var React = require("react");
var Utility = require("../Utility");
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
exports.Book = Book;
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());
exports.Card = Card;
var CheckDisplay = /** @class */ (function (_super) {
    tslib_1.__extends(CheckDisplay, _super);
    function CheckDisplay(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: _this.props.data,
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
                React.createElement(react_bootstrap_1.Button, { bsStyle: "success", onClick: this.check.bind(this) }, "\u901A\u8FC7")),
            React.createElement("td", null,
                React.createElement(react_bootstrap_1.Button, { bsStyle: "danger", onClick: this.refuse.bind(this) }, "\u62D2\u7EDD")));
    };
    return CheckDisplay;
}(React.Component));
exports.CheckDisplay = CheckDisplay;
var ManageCenter = /** @class */ (function (_super) {
    tslib_1.__extends(ManageCenter, _super);
    function ManageCenter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { books: [], book: new Book(), tip: "", tip1: "", tip2: "", cardId: "", card: new Card() };
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
                        this.setState({ books: data });
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageCenter.prototype.convert = function (data) {
        return React.createElement(CheckDisplay, { update: this.update, data: data });
    };
    ManageCenter.prototype.handleName = function (e) {
        var bk = this.state.book;
        bk.name = e.target.value;
        this.setState({ book: bk });
    };
    ManageCenter.prototype.handleYear = function (e) {
        var bk = this.state.book;
        bk.year = e.target.value;
        this.setState({ book: bk });
    };
    ManageCenter.prototype.handleAuthor = function (e) {
        var bk = this.state.book;
        bk.author = e.target.value;
        this.setState({ book: bk });
    };
    ManageCenter.prototype.handlePrice = function (e) {
        var bk = this.state.book;
        bk.price = e.target.value;
        this.setState({ book: bk });
    };
    ManageCenter.prototype.handlePress = function (e) {
        var bk = this.state.book;
        bk.press = e.target.value;
        this.setState({ book: bk });
    };
    ManageCenter.prototype.handleType = function (e) {
        var bk = this.state.book;
        bk.type = e.target.value;
        this.setState({ book: bk });
    };
    ManageCenter.prototype.handleStock = function (e) {
        var bk = this.state.book;
        bk.stock = e.target.value;
        this.setState({ book: bk });
    };
    ManageCenter.prototype.handleTotal = function (e) {
        var bk = this.state.book;
        bk.total = e.target.value;
        this.setState({ book: bk });
    };
    ManageCenter.prototype.handleRemoveCard = function (e) {
        this.setState({ cardId: e.target.value });
    };
    ManageCenter.prototype.handleCardName = function (e) {
        var cd = this.state.card;
        cd.name = e.target.value;
        this.setState({ card: cd });
    };
    ManageCenter.prototype.handleCardCompany = function (e) {
        var cd = this.state.card;
        cd.company = e.target.value;
        this.setState({ card: cd });
    };
    ManageCenter.prototype.handleCardType = function (e) {
        var cd = this.state.card;
        cd.type = e.target.value;
        this.setState({ card: cd });
    };
    ManageCenter.prototype.handleCardPassword = function (e) {
        var cd = this.state.card;
        cd.password = e.target.value;
        this.setState({ card: cd });
    };
    ManageCenter.prototype.addCard = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.addCard(this.state.card)];
                    case 1:
                        data = _a.sent();
                        if (data == "ojbk")
                            this.setState({ card: new Card(), tip1: "添加成功" });
                        else
                            this.setState({ tip1: "添加失败" });
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageCenter.prototype.removeCard = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utility.removeCard(this.state.cardId)];
                    case 1:
                        data = _a.sent();
                        if (data == 'ojbk')
                            this.setState({ tip2: "注销成功" });
                        else
                            this.setState({ tip2: "注销失败,请先还完书籍" });
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageCenter.prototype.add = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.state.book.name) {
                            alert("请输入书名");
                            return [2 /*return*/];
                        }
                        if (!this.state.book.author) {
                            alert("请输入作者");
                            return [2 /*return*/];
                        }
                        if (!this.state.book.price) {
                            alert("请输入价格");
                            return [2 /*return*/];
                        }
                        if (!this.state.book.stock) {
                            alert("请输入库存");
                            return [2 /*return*/];
                        }
                        if (!this.state.book.total) {
                            alert("请输入总量");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Utility.add(this.state.book)];
                    case 1:
                        data = _a.sent();
                        if (data == "ojbk")
                            this.setState({ tip: "入库成功" });
                        else
                            this.setState({ tip: "入库失败" });
                        return [2 /*return*/];
                }
            });
        });
    };
    ManageCenter.prototype.handleUpload = function (files) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, token, myHeaders, formdata, i, res, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = "http://localhost:62376/api/books/upload";
                        token = localStorage.getItem("token");
                        myHeaders = { "Authorization": token };
                        formdata = new FormData();
                        for (i = 0; i < files.length; i++) {
                            console.log("file length=" + files.length);
                            console.log(files[0].size);
                            formdata.append('files', files[i]);
                        }
                        formdata.append('contentType', "multipart/form-data");
                        return [4 /*yield*/, fetch(url, {
                                method: 'POST',
                                headers: myHeaders,
                                body: formdata
                            })];
                    case 1:
                        res = _a.sent();
                        //let data: string[] = await res.json();
                        if (res.status === 200) {
                            this.setState({ tip: "上传成功" });
                        }
                        else {
                            this.setState({ tip: "上传失败" });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.setState({
                            tip: "上传失败"
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ManageCenter.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: "manage-center column" },
            React.createElement("div", { className: "column result", style: { alignSelf: "center", width: "1200px" } },
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
                    React.createElement("tbody", null, this.state.books.map(this.convert.bind(this)))),
                this.state.books.length == 0 ? "当前没有需要审核的借阅申请" : ""),
            React.createElement("div", { className: "row", style: { justifyContent: "space-between", width: "100%" } },
                React.createElement("div", { className: "column category" },
                    React.createElement("div", { className: "row" },
                        React.createElement("label", { className: "category-label" }, "\u4E66\u540D"),
                        React.createElement("input", { type: "text", onChange: this.handleName.bind(this), value: this.state.book.name })),
                    React.createElement("div", { className: "row" },
                        React.createElement("label", { className: "category-label" }, "\u4F5C\u8005"),
                        React.createElement("input", { type: "text", onChange: this.handleAuthor.bind(this), value: this.state.book.author })),
                    React.createElement("div", { className: "row" },
                        React.createElement("label", { className: "category-label" }, "\u51FA\u7248\u793E"),
                        React.createElement("input", { type: "text", onChange: this.handlePress.bind(this), value: this.state.book.press })),
                    React.createElement("div", { className: "row" },
                        React.createElement("label", { className: "category-label" }, "\u7C7B\u522B"),
                        React.createElement("input", { type: "text", onChange: this.handleType.bind(this), value: this.state.book.type })),
                    React.createElement("div", { className: "row" },
                        React.createElement("label", { className: "category-label" }, "\u4EF7\u683C"),
                        React.createElement("input", { type: "text", onChange: this.handlePrice.bind(this), value: this.state.book.price })),
                    React.createElement("div", { className: "row" },
                        React.createElement("label", { className: "category-label" }, "\u5E74\u4EFD"),
                        React.createElement("input", { type: "text", onChange: this.handleYear.bind(this), value: this.state.book.year })),
                    React.createElement("div", { className: "row" },
                        React.createElement("label", { className: "category-label" }, "\u5E93\u5B58"),
                        React.createElement("input", { type: "text", onChange: this.handleStock.bind(this), value: this.state.book.stock })),
                    React.createElement("div", { className: "row" },
                        React.createElement("label", { className: "category-label" }, "\u603B\u91CF"),
                        React.createElement("input", { type: "text", onChange: this.handleTotal.bind(this), value: this.state.book.total })),
                    React.createElement(react_bootstrap_1.Button, { style: { width: "250px" }, onClick: this.add.bind(this) }, "\u5165\u5E93"),
                    React.createElement("h3", null, this.state.tip)),
                React.createElement("div", { className: "column", style: { justifyContent: "flex-start" } },
                    React.createElement("label", { htmlFor: "upload", title: "上传本地文件" }, "\u4E0A\u4F20\u672C\u5730\u6587\u4EF6"),
                    React.createElement("input", { type: "file", id: "upload", accept: "*", onClick: function (e) { return e.stopPropagation(); }, onChange: function (e) { return _this.handleUpload(e.target.files); }, multiple: true }),
                    React.createElement("div", { className: "column", style: { height: "300px", justifyContent: "space-between" } },
                        React.createElement("h3", null, "\u6DFB\u52A0\u501F\u4E66\u8BC1"),
                        React.createElement("div", { className: "row" },
                            React.createElement("label", { className: "category-label" }, "\u59D3\u540D"),
                            React.createElement("input", { type: "text", onChange: this.handleCardName.bind(this), value: this.state.card.name })),
                        React.createElement("div", { className: "row" },
                            React.createElement("label", { className: "category-label" }, "\u90E8\u95E8"),
                            React.createElement("input", { type: "text", onChange: this.handleCardCompany.bind(this), value: this.state.card.company })),
                        React.createElement("div", { className: "row" },
                            React.createElement("label", { className: "category-label" }, "\u7C7B\u522B"),
                            React.createElement("input", { type: "text", onChange: this.handleCardType.bind(this), value: this.state.card.type })),
                        React.createElement("div", { className: "row" },
                            React.createElement("label", { className: "category-label" }, "\u5BC6\u7801"),
                            React.createElement("input", { type: "text", onChange: this.handleCardPassword.bind(this), value: this.state.card.password })),
                        React.createElement(react_bootstrap_1.Button, { bsStyle: "success", onClick: this.addCard.bind(this) }, "\u6CE8\u518C"),
                        React.createElement("h3", null, this.state.tip1)),
                    React.createElement("div", { className: "column", style: { height: "200px", justifyContent: "space-between" } },
                        React.createElement("h3", null, "\u6CE8\u9500\u501F\u4E66\u8BC1"),
                        React.createElement("label", { className: "category-label" }, "\u501F\u4E66\u5361\u59D3\u540D"),
                        React.createElement("input", { type: "text", onChange: this.handleRemoveCard.bind(this), value: this.state.cardId }),
                        React.createElement(react_bootstrap_1.Button, { bsStyle: "danger", onClick: this.removeCard.bind(this) }, "\u6CE8\u9500"),
                        React.createElement("h3", null, this.state.tip2)))));
    };
    return ManageCenter;
}(React.Component));
exports.ManageCenter = ManageCenter;
