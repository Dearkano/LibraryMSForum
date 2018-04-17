import * as React from "react";
import * as Utility from '../Utility';
import { BookDisplay } from './Library'
import { Table, Button } from 'react-bootstrap';
declare let moment: any;
export class MyBookDisplay extends React.Component<{data }, { data,bookState }>{
    constructor(props) {
        super(props);
        this.state = {
            bookState: { returnDate: "2018-4-30", borrowState: 0 },
           data: this.props.data
        };
    }
    async componentDidMount() {
        //查看是否借过
        const bookState = await Utility.bookState(this.props.data.book.id);
        this.setState({ bookState: bookState });
    }
    async borrow() {
        if (!localStorage.getItem("token")) {
            alert("请先登录！");
            return;
        }
        await Utility.borrow(this.props.data.book.id);
        document.location.href = "/mybook";
    }
    async returnBook() {
        await Utility.returnBook(this.props.data.book.id);
        await Utility.getSingleBook(this.props.data.book.name);
        document.location.href = "/mybook";
    }
    render() {
        console.log(this.state.data);
        let bs = "success";
        if (this.state.bookState.borrowState == 1)
            bs = "warning";
        if (this.state.bookState.borrowState == 2)
            bs = "info"
        return <tr>
            <td>{this.state.data.book.id}</td>
            <td>{this.state.data.book.name}</td>
            <td>{this.state.data.book.author}</td>
            <td>{this.state.data.book.press}</td>
            <td>{this.state.data.book.year}</td>
            <td>{this.state.data.book.price}</td>
            <td>{this.state.data.book.stock}</td>
            <td>{this.state.data.book.total}</td>
            <td>{this.state.data.record.borrow_date}</td>
            <td>{this.state.data.record.return_date}</td>
            <td>
                <Button style={{ width: "80px" }} bsStyle={this.state.data.book.stock == 0 && this.state.bookState.borrowState==0 ? "danger" : bs} disabled={this.state.data.book.stock == 0 && this.state.bookState.borrowState == 0 || this.state.bookState.borrowState == 2 ? true : false} onClick={this.state.bookState.borrowState == 1 ? this.returnBook.bind(this) : this.borrow.bind(this)}>
                    {this.state.bookState.borrowState == 0 ? "借阅" : this.state.bookState.borrowState == 1 ? "还书" : "待审核"}
                </Button>
            </td>
        </tr>;
    }
}

export class MyBook extends React.Component<{}, {books}>{
    constructor(props) {
        super(props);
        this.state = { books: [] };
    }
    async componentDidMount() {
        const data = await Utility.getMyBooks();
        this.setState({ books: data });
    }
    convert(book) {
        return <MyBookDisplay data={book} />;
    }
    render() {
        return <div className="column result" style={{ alignSelf:"center" ,width:"1300px"}}>
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
                        <th>借书日期</th>
                        <th>还书日期</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.books.map(this.convert.bind(this))}
                </tbody>
            </Table>
        </div>;
    }
} 