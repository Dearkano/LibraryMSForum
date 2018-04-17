"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var Library_1 = require("./Components/Library");
var Header_1 = require("./Components/Header");
var Footer_1 = require("./Components/Footer");
var MainPage_1 = require("./Components/MainPage");
var LogIn_1 = require("./Components/LogIn");
var LogOut_1 = require("./Components/LogOut");
var ManageCenter_1 = require("./Components/ManageCenter");
var MyBook_1 = require("./Components/MyBook");
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", { className: "root" },
                React.createElement(Header_1.Header, null),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: MainPage_1.MainPage }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: LogIn_1.LogIn }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/library", component: Library_1.Library }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/managecenter", component: ManageCenter_1.ManageCenter }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/logout", component: LogOut_1.LogOut }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/mybook", component: MyBook_1.MyBook }),
                React.createElement(Footer_1.Footer, null)));
    };
    return App;
}(React.Component));
exports.App = App;
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
