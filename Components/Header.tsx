import { Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import * as React from "react";
export class Header extends React.Component {
    render() {
        var isLogin = false;
        var name = "";
        if (localStorage.getItem("token")) {
            isLogin = true;
            name = JSON.parse(localStorage.getItem("cardInfo")).name;
        }
        let userCenter = null;
        if (localStorage.getItem("token") && JSON.parse(localStorage.getItem("cardInfo")).type == "管理员") {
            userCenter = <NavItem eventKey={1} href="/managecenter">
                管理中心
      </NavItem>;
        }
        return <div><Navbar inverse collapseOnSelect>
          
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">图书管理系统</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="/mybook">
                        我的图书
      </NavItem>
                    <NavItem eventKey={2} href="/library">
                        图书馆
      </NavItem>
                </Nav>
              
                <Nav pullRight>
                    {userCenter}
                    <NavItem eventKey={2} href={isLogin?"/logout":"/login"}>
                        {isLogin?name+"/注销":"登录"}
      </NavItem>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar></div>;
    }
}

