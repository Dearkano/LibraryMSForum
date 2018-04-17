import * as React from "react";
import * as Utility from '../Utility';
import { Button,Table} from 'react-bootstrap';
export class LogIn extends React.Component<{}, { name, password ,tip}>{
    constructor(props) {
        super(props);
        this.state = { name: "", password: "" ,tip:""};
    }
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    async handleLogin() {
        const data = await Utility.login(this.state.name, this.state.password);
        if (data== "password error") this.setState({ tip: "登陆失败" });
        else {
            localStorage.setItem("token", data);
            const cardInfo = await Utility.getMyCard();
            localStorage.setItem("cardInfo", JSON.stringify(cardInfo));
            this.setState({ tip: "登陆成功" });
            document.location.href = "/";
        }
    }
    componentDidMount() {
        
    }
    render() {
        return <div className="column" style={{ alignItems:"center",width:"100%" }}> 
            <div className="login-form">
                <p>用户名</p><input name="username" type="text" id="loginName" onChange={this.handleNameChange.bind(this)} value={this.state.name} autoComplete="username" />
            </div>
            <div className="login-form">
                <p>密码</p><input name="password" type="password" id="loginPassword" onChange={this.handlePasswordChange.bind(this)} autoComplete="current-password" />
            </div>
            <p id="loginMessage">{this.state.tip}</p>
            <Button onClick={this.handleLogin.bind(this)}>登录</Button>
               <div style={{ width: "30%", marginTop:"40px" }}>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>账号</th>
                        <th>密码</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>田子珺（学生）</td>
                        <td>tzj</td>
                    </tr>
                    <tr>
                        <td>张泽安（学生）</td>
                        <td>zza</td>
                        </tr>
                        <tr>
                            <td>陈岭（老师）</td>
                            <td >cl</td>
                        </tr>
                    <tr>
                        <td>Vayne（管理员）</td>
                        <td >vayne</td>
                    </tr>
                    <tr>
                        <td>Mana（管理员）</td>
                        <td >mana</td>
                    </tr>
                </tbody>
                </Table>
                </div>
        </div>;
    }
}