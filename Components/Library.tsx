import { Table ,Button} from 'react-bootstrap';
import * as React from "react";
import * as Utility from "../Utility";
declare let moment: any;

export class BookDisplay extends React.Component<{ book }, {book,bookState }>{
    constructor(props) {
        super(props);
        this.state = {
            bookState: { returnDate: "2018-4-30", borrowState: 0 },
            book: this.props.book
        };
    }
    async borrow() {
        if (!localStorage.getItem("token")) {
            alert("请先登录！");
            return;
        }
        await Utility.borrow(this.props.book.id);
        const data = await Utility.getSingleBook(this.props.book.name);
        const state = await Utility.bookState(this.props.book.id);
        this.setState({ bookState: state,book:data });
    }
    async returnBook() {
        await Utility.returnBook(this.props.book.id);
        const data = await Utility.getSingleBook(this.props.book.name);
        const state = await Utility.bookState(this.props.book.id);
        this.setState({ bookState: state, book: data });
    }
    async componentDidMount() {
        //查看是否借过
        const bookState = await Utility.bookState(this.props.book.id);
        this.setState({ bookState: bookState });
    }
    async componentWillReceiveProps(newProps) {
        const bookState = await Utility.bookState(newProps.book.id);
        this.setState({ book: newProps.book, bookState: bookState  })
    }
    render() {
        let bs = "success";
        if (this.state.bookState.borrowState==1)
        bs = "warning";
        if (this.state.bookState.borrowState == 2)
        bs = "info"
        return <tr>
            <td>{this.state.book.id}</td>
            <td>{this.state.book.name}</td>
            <td>{this.state.book.author}</td>
            <td>{this.state.book.press}</td>
            <td>{this.state.book.year}</td>
            <td>{this.state.book.price}</td>
            <td>{this.state.book.stock}</td>
            <td>{this.state.book.total}</td>
            <td>{moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')}</td>
            <td>
                <Button style={{ width: "80px" }} bsStyle={this.state.book.stock == 0 && this.state.bookState.borrowState==0 ? "danger" : bs} disabled={this.state.book.stock == 0 && this.state.bookState.borrowState == 0 || this.state.bookState.borrowState == 2 ? true : false} onClick={this.state.bookState.borrowState == 1 ? this.returnBook.bind(this) : this.borrow.bind(this)}>
                    {this.state.bookState.borrowState == 0 ? "借阅" : this.state.bookState.borrowState==1?"还书":"待审核"}
                </Button>
            </td>
        </tr>;
    }
}

export class Library extends React.Component<{}, { name, fromyear, toyear, press, type, fromprice, toprice, author ,books}> {
    constructor(props) {
        super(props);
        this.state = ({ name: "", fromprice: "", toprice: "", toyear: "", type: "", author: "", fromyear: "", press:"",books:[] })
    }
    handleName(e) {
        console.log(e.target.value);
        this.setState({ name: e.target.value });
    }
    handlePress(e) {
        this.setState({ press: e.target.value });
    }
    handleAuthor(e) {
        this.setState({ author: e.target.value });
    }
    handleFromyear(e) {
        this.setState({ fromyear: e.target.value });
    }
    handleToyear(e) {
        this.setState({ toyear: e.target.value });
    }
    handleFromprice(e) {
        this.setState({ fromprice: e.target.value });
    }
    handleToprice(e) {
        this.setState({ toprice: e.target.value });
    }
    handleType(e) {
        this.setState({ type: e.target.value });
    }
    convert(book) {
        console.log("---");
        console.log(book);
        return <BookDisplay book={book} />;
    }
  
    async search() {
        if (this.isEmpty()) {
            alert("您还没有输入任何内容！");
            return;
        }
        const book = {
            name: this.state.name,
            author: this.state.author,
            press: this.state.press,
            fromprice: this.state.fromprice,
            toprice: this.state.toprice,
            fromyear: this.state.fromyear,
            toyear: this.state.toyear,
            type: this.state.type
        }
        const data = await Utility.search(book);
        console.log(data);
        this.setState({ books: data });
    }
    isEmpty() {
        if (!this.state.author && !this.state.books && !this.state.fromprice && !this.state.fromyear && !this.state.name && !this.state.press && !this.state.type && this.state.toyear && this.state.toprice)
            return true;
        else return false;
    }
    render() {
        return <div className="row" style={{ justifyContent:"space-around" }}>
            <div className="column category">

                <div className="row">
                    <label className="category-label">书名</label>
                    <input type="text" onChange={this.handleName.bind(this)} value={this.state.name} />
                </div>

                <div className="row">
                    <label className="category-label">作者</label>
                    <input type="text" onChange={this.handleAuthor.bind(this)} value={this.state.author} />
                </div>

                <div className="row">
                    <label className="category-label">出版社</label>
                    <input type="text" onChange={this.handlePress.bind(this)} value={this.state.press}  />
                </div>

                <div className="row">
                    <label className="category-label">类别</label>
                    <input type="text" onChange={this.handleType.bind(this)} value={this.state.type}  />
                </div>

                <div className="row">
                    <label className="category-label">最低价</label>
                    <input type="text" onChange={this.handleFromprice.bind(this)} value={this.state.fromprice} />
                </div>

                <div className="row">
                    <label className="category-label">最高价</label>
                    <input type="text" onChange={this.handleToprice.bind(this)} value={this.state.toprice} />
                </div>

                <div className="row">
                    <label className="category-label">年份（早）</label>
                    <input type="text" onChange={this.handleFromyear.bind(this)} value={this.state.fromyear} />
                </div>

                <div className="row">
                    <label className="category-label">年份（晚）</label>
                    <input type="text" value={this.state.toyear} onChange={this.handleToyear.bind(this)} />
                </div>

                <Button style={{width:"250px"}}onClick={this.search.bind(this)}>查询</Button>

            </div>

            <div className="column result">
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
                            <th>最近归还时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map(this.convert.bind(this))}
                    </tbody>
                </Table>
            </div>

        </div>;
    }
}