import { Table, Button, PageHeader } from 'react-bootstrap';
import * as React from "react";
import * as Utility from "../Utility";
declare let moment: any;
export class CheckDisplay extends React.Component<{update,data}, { data }>{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }
    async check() {
        const bid = this.state.data.book.id;
        const cid = this.state.data.card.id;
        await Utility.check(bid, cid);
        document.location.href = "/managecenter";
    }
    async refuse() {
        const bid = this.state.data.book.id;
        const cid = this.state.data.card.id;
        await Utility.refuse(bid, cid);
        document.location.href = "/managecenter";
    }
    render() {
        return <tr>
            <td>{this.state.data.book.id}</td>
            <td>{this.state.data.book.name}</td>
            <td>{this.state.data.book.author}</td>
            <td>{this.state.data.book.press}</td>
            <td>{this.state.data.book.year}</td>
            <td>{this.state.data.book.price}</td>
            <td>{this.state.data.book.stock}</td>
            <td>{this.state.data.book.total}</td>
            <td>{this.state.data.card.id}</td>
            <td>{this.state.data.card.name}</td>
            <td>{this.state.data.record.borrow_date}</td>
            <td>{this.state.data.record.return_date}</td>
            <td><Button onClick={this.check.bind(this)}>通过</Button></td>
            <td><Button onClick={this.refuse.bind(this)}>拒绝</Button></td>
            </tr>;
    }
}

export class ManageCenter extends React.Component<{}, { books }>{
    constructor(props) {
        super(props);
        this.state = { books: [] };
    }
    async componentDidMount() {
        const data = await Utility.getUnacceptedBooks();
        this.setState({ books: data });
    }
    async update() {
        const data = await Utility.getUnacceptedBooks();
        console.log("123124");
        this.setState({ books: data });
    }
    convert(data) {
        return <CheckDisplay update={this.update} data={data} />;
    }
    render() {
        return <div className="column result" style={{ alignSelf:"center",width:"1200px" }}>
            <Table>
                <thead>
                    <tr>
                        <th>书号</th>
                        <th>书名</th>
                        <th>作者</th>
                        <th>出版社</th>
                        <th>年份</th>
                        <th>价格</th>
                        <th>库存</th>
                        <th>总量</th>
                        <th>借书证号</th>
                        <th>借书人姓名</th>
                        <th>借书时间</th>
                        <th>还书时间</th>
                        <th>操作</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
            {this.state.books.map(this.convert.bind(this))}
                </tbody>
            </Table>
        </div>
    }
}

