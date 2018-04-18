"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function formAuthorization() {
    var token = localStorage.getItem("token");
    var headers = { "Authorization": token, "Content-Type": "application/json" };
    return headers;
}
exports.formAuthorization = formAuthorization;
function CC98Fetch(_url, jsonStr) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var headers, url, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = formAuthorization();
                    url = "http://localhost:62376/api/" + _url;
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: jsonStr })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function login(name, password) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, body, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = encodeURI("http://localhost:62376/api/login");
                    headers = { "Content-Type": "application/json" };
                    body = JSON.stringify({ name: name, password: password });
                    return [4 /*yield*/, fetch(url, { method: "POST", headers: headers, body: body })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.login = login;
function getMyCard() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var headers, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = formAuthorization();
                    return [4 /*yield*/, fetch("http://localhost:62376/api/card/me", { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.getMyCard = getMyCard;
function search(data) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'books/search';
                    return [4 /*yield*/, CC98Fetch(url, JSON.stringify(data))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.search = search;
function getSingleBook(name) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:62376/api/books/name/" + name;
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data[0]];
            }
        });
    });
}
exports.getSingleBook = getSingleBook;
function borrow(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var headers, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = formAuthorization();
                    return [4 /*yield*/, fetch("http://localhost:62376/api/br/borrow/" + id, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.borrow = borrow;
function returnBook(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var headers, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = formAuthorization();
                    return [4 /*yield*/, fetch("http://localhost:62376/api/br/return/" + id, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.returnBook = returnBook;
function bookState(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var headers, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = formAuthorization();
                    return [4 /*yield*/, fetch("http://localhost:62376/api/books/state/" + id, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.bookState = bookState;
function getUnacceptedBooks() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, response, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'http://localhost:62376/api/br/getcheck';
                    headers = formAuthorization();
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.getUnacceptedBooks = getUnacceptedBooks;
function check(bid, cid) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:62376/api/br/check/" + bid + "/" + cid;
                    headers = formAuthorization();
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.check = check;
function refuse(bid, cid) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:62376/api/br/check/" + bid + "/" + cid;
                    headers = formAuthorization();
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.refuse = refuse;
function getMyBooks() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:62376/api/card/books/me";
                    headers = formAuthorization();
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getMyBooks = getMyBooks;
function add(book) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "books/add";
                    return [4 /*yield*/, CC98Fetch(url, JSON.stringify(book))];
                case 1:
                    response = _a.sent();
                    if (response.status == 200)
                        return [2 /*return*/, "ojbk"];
                    else
                        return [2 /*return*/, "error"];
                    return [2 /*return*/];
            }
        });
    });
}
exports.add = add;
function addCard(card) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, response, str;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "card/add";
                    return [4 /*yield*/, CC98Fetch(url, JSON.stringify(card))];
                case 1:
                    response = _a.sent();
                    if (response.status == 200)
                        str = "ojbk";
                    else
                        str = "error";
                    return [2 /*return*/, str];
            }
        });
    });
}
exports.addCard = addCard;
function removeCard(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var url, headers, response, str;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "http://localhost:62376/api/card/remove/" + id;
                    headers = formAuthorization();
                    return [4 /*yield*/, fetch(url, { headers: headers })];
                case 1:
                    response = _a.sent();
                    if (response.status == 200)
                        str = "ojbk";
                    else
                        str = "error";
                    return [2 /*return*/, str];
            }
        });
    });
}
exports.removeCard = removeCard;
