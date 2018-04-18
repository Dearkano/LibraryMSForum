import { Tabs,Tab,Table } from 'react-bootstrap';
import * as React from "react";
export class MainPage extends React.Component<{}, { key }> {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: 1
        };
    }

    handleSelect(key) {
        this.setState({ key });
    }

    render() {
        return <div className="mainpage-body">
            <img src="/static/logo_white.png" className="whitelogo" />
            <h2 className="developer">CC98编程技术版</h2>
            <h2 className="database">数据库技术</h2>
            <img src="./static/logo.png" className="logo" />
            <div style={{ marginTop: "-20px" }}>
                <img src="/static/blockchain.jpg" width="1515px" />
                <h1 className="title">浙江大学图书管理系统</h1>
                <h2 className="title1">致力于为浙大师生提供一个便携的图书借阅解决方案
</h2>
            </div>
            <div style={{ width: "900px", marginTop:"230px" }}>
            <Tabs
                activeKey={this.state.key}
                onSelect={this.handleSelect}
                id="controlled-tab-example"
            >
                <Tab eventKey={1} title="科幻">
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>  
                                    <th>书名</th>
                                    <th>作者</th>
                                    <th>出版社</th>
                                    <th>年份</th>
                                    <th>价格</th>
                                    <th>库存</th>
                                    <th>总量</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>三体</td>
                                <td>刘慈欣</td>
                                <td>重庆出版社</td>
                                <td>2005</td>
                                <td>33.00</td>
                                <td>12</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                    <td>银河帝国：基地</td>
                                    <td>阿西莫夫</td>
                                    <td>江苏文艺出版社</td>
                                    <td>1940</td>
                                    <td>41.00</td>
                                    <td>2</td>
                                    <td>10</td>
                            </tr>
                            <tr>
                                    <td>沙丘</td>
                                    <td>弗兰克・赫伯特 </td>
                                    <td>江苏凤凰文艺出版社</td>
                                    <td>1950</td>
                                    <td>66.00</td>
                                    <td>4</td>
                                    <td>5</td>
                            </tr>
                            <tr>
                                    <td>万有引力之虹</td>
                                    <td>托马斯・品钦</td>
                                    <td>译林出版社</td>
                                    <td>1973</td>
                                    <td>53.00</td>
                                    <td>7</td>
                                    <td>8</td>
                            </tr>
                            <tr>
                                    <td>漫长的明天</td>
                                    <td>雷・布拉凯特 </td>
                                    <td>漓江出版社</td>
                                    <td>1955</td>
                                    <td>43.00</td>
                                    <td>0</td>
                                    <td>2</td>
                            </tr>
                        </tbody>
                    </Table>
        </Tab>
                <Tab eventKey={2} title="历史">
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>书名</th>
                                    <th>作者</th>
                                    <th>出版社</th>
                                    <th>年份</th>
                                    <th>价格</th>
                                    <th>库存</th>
                                    <th>总量</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>三体</td>
                                    <td>刘慈欣</td>
                                    <td>重庆出版社</td>
                                    <td>2005</td>
                                    <td>33.00</td>
                                    <td>12</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>银河帝国：基地</td>
                                    <td>阿西莫夫</td>
                                    <td>江苏文艺出版社</td>
                                    <td>1940</td>
                                    <td>41.00</td>
                                    <td>2</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>沙丘</td>
                                    <td>弗兰克・赫伯特 </td>
                                    <td>江苏凤凰文艺出版社</td>
                                    <td>1950</td>
                                    <td>66.00</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>万有引力之虹</td>
                                    <td>托马斯・品钦</td>
                                    <td>译林出版社</td>
                                    <td>1973</td>
                                    <td>53.00</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>漫长的明天</td>
                                    <td>雷・布拉凯特 </td>
                                    <td>漓江出版社</td>
                                    <td>1955</td>
                                    <td>43.00</td>
                                    <td>0</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </Table>
        </Tab>
                <Tab eventKey={3} title="计算机" >
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>书名</th>
                                    <th>作者</th>
                                    <th>出版社</th>
                                    <th>年份</th>
                                    <th>价格</th>
                                    <th>库存</th>
                                    <th>总量</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>三体</td>
                                    <td>刘慈欣</td>
                                    <td>重庆出版社</td>
                                    <td>2005</td>
                                    <td>33.00</td>
                                    <td>12</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>银河帝国：基地</td>
                                    <td>阿西莫夫</td>
                                    <td>江苏文艺出版社</td>
                                    <td>1940</td>
                                    <td>41.00</td>
                                    <td>2</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>沙丘</td>
                                    <td>弗兰克・赫伯特 </td>
                                    <td>江苏凤凰文艺出版社</td>
                                    <td>1950</td>
                                    <td>66.00</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>万有引力之虹</td>
                                    <td>托马斯・品钦</td>
                                    <td>译林出版社</td>
                                    <td>1973</td>
                                    <td>53.00</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>漫长的明天</td>
                                    <td>雷・布拉凯特 </td>
                                    <td>漓江出版社</td>
                                    <td>1955</td>
                                    <td>43.00</td>
                                    <td>0</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </Table>
        </Tab>
                </Tabs>
                </div>
        </div>;
    }
}