import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar, Nav, MenuItem, NavItem, NavDropdown,Tab,Tabs } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { Library } from './Components/Library';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { MainPage } from './Components/MainPage';
import { LogIn } from './Components/LogIn';
import { LogOut } from './Components/LogOut';
import { ManageCenter } from './Components/ManageCenter';
import { MyBook } from './Components/MyBook';
export class App extends React.Component<{}, {}>{
    render() {
        return <Router>
            <div className="root">
                <Header />
                <Route exact path="/" component={MainPage} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/library" component={Library} />
                <Route exact path="/managecenter" component={ManageCenter} />
                <Route exact path="/logout" component={LogOut} />
                <Route exact path="/mybook" component={MyBook} />
                <Footer />
            </div>
            </Router>
        ;
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')

);







ReactDOM.render(
    <App />,
    document.getElementById('root')

);