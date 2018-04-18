import { Table, Button, PageHeader } from 'react-bootstrap';
import * as React from "react";
import * as Utility from "../Utility";
declare let moment: any;
export class Book {
    name;
    author;
    press;
    year;
    price;
    type;
    stock;
    total;
}
export class Card {
    name;
    password;
    company;
    type;
}
export class CheckDisplay extends React.Component<{update,data}, { data}>{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,

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
            <td><Button bsStyle="success" onClick={this.check.bind(this)}>通过</Button></td>
            <td><Button bsStyle="danger" onClick={this.refuse.bind(this)}>拒绝</Button></td>
            </tr>;
    }
}

export class ManageCenter extends React.Component<{}, {cardId,card:Card,tip,tip1,tip2, books ,book:Book}>{
    constructor(props) {
        super(props);
        this.state = { books: [] ,book:new Book(),tip:"",tip1:"",tip2:"",cardId:"",card:new Card()};
    }
    async componentDidMount() {
        const data = await Utility.getUnacceptedBooks();
        this.setState({ books: data });
    }
    async update() {
        const data = await Utility.getUnacceptedBooks();
        this.setState({ books: data });
    }
    convert(data) {
        return <CheckDisplay update={this.update} data={data} />;
    }
    handleName(e) {
        let bk = this.state.book;
        bk.name = e.target.value;
        this.setState({ book: bk });
    }
    handleYear(e) {
        let bk = this.state.book;
        bk.year = e.target.value;
        this.setState({ book: bk });
    }
    handleAuthor(e) {
        let bk = this.state.book;
        bk.author = e.target.value;
        this.setState({ book: bk });
    }
    handlePrice(e) {
        let bk = this.state.book;
        bk.price = e.target.value;
        this.setState({ book: bk });
    }
    handlePress(e) {
        let bk = this.state.book;
        bk.press = e.target.value;
        this.setState({ book: bk });
    }
    handleType(e) {
        let bk = this.state.book;
        bk.type = e.target.value;
        this.setState({ book: bk });
    }
    handleStock(e) {
        let bk = this.state.book;
        bk.stock = e.target.value;
        this.setState({ book: bk });
    }
    handleTotal(e) {
        let bk = this.state.book;
        bk.total = e.target.value;
        this.setState({ book: bk });
    }
    handleRemoveCard(e) {
        this.setState({ cardId: e.target.value });
    }
    handleCardName(e) {
        let cd = this.state.card;
        cd.name = e.target.value;
        this.setState({ card: cd });
    }
    handleCardCompany(e) {
        let cd = this.state.card;
        cd.company = e.target.value;
        this.setState({ card: cd });
    }
    handleCardType(e) {
        let cd = this.state.card;
        cd.type = e.target.value;
        this.setState({ card: cd });
    }
    handleCardPassword(e) {
        let cd = this.state.card;
        cd.password = e.target.value;
        this.setState({ card: cd });
    }
    async addCard() {
        const data = await Utility.addCard(this.state.card);
        if (data == "ojbk") this.setState({ card:new Card(), tip1: "添加成功" });
        else this.setState({ tip1: "添加失败" });
    }
    async removeCard() {
        const data = await Utility.removeCard(this.state.cardId);
        if (data == 'ojbk') this.setState({ tip2: "注销成功" });
        else this.setState({ tip2: "注销失败,请先还完书籍" });
    }
    async add() {
        if (!this.state.book.name) {
            alert("请输入书名");
            return;
        }
        if (!this.state.book.author) {
            alert("请输入作者");
            return;
        }
        if (!this.state.book.price) {
            alert("请输入价格");
            return;
        }
        if (!this.state.book.stock) {
            alert("请输入库存");
            return;
        }
        if (!this.state.book.total) {
            alert("请输入总量");
            return;
        }
        const data = await Utility.add(this.state.book);
        if (data == "ojbk") this.setState({ tip: "入库成功" });
        else this.setState({ tip: "入库失败" });
    }
        async handleUpload(files: FileList) {
            try {
               
                const url = `http://localhost:62376/api/books/upload`;
                const token = localStorage.getItem("token");
                const myHeaders = { "Authorization": token };
                let formdata = new FormData();
                for (let i = 0; i < files.length; i++) {
                    console.log("file length=" + files.length);
                    console.log(files[0].size);
                    formdata.append('files', files[i]);
                }
                formdata.append('contentType', "multipart/form-data");
                let res = await fetch(url, {
                    method: 'POST',
                    headers: myHeaders,
                    body: formdata
                });
                //let data: string[] = await res.json();
                if (res.status === 200) {
                    this.setState({ tip: "上传成功" });
                } else {
                    this.setState({ tip: "上传失败" });
                }
            } catch (e) {
                this.setState({
                    tip: "上传失败" 
                });              
            }
        }

      
    render() {
        return <div className="manage-center column">
            <div className="column result" style={{ alignSelf: "center", width: "1200px" }}>
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
                {this.state.books.length == 0 ?"当前没有需要审核的借阅申请":""}
            </div>
            <div className="row" style={{ justifyContent:"space-between",width:"100%" }}>
            <div className="column category">

                <div className="row">
                    <label className="category-label">书名</label>
                    <input type="text" onChange={this.handleName.bind(this)} value={this.state.book.name} />
                </div>

                <div className="row">
                    <label className="category-label">作者</label>
                    <input type="text" onChange={this.handleAuthor.bind(this)} value={this.state.book.author} />
                </div>

                <div className="row">
                    <label className="category-label">出版社</label>
                    <input type="text" onChange={this.handlePress.bind(this)} value={this.state.book.press} />
                </div>

                <div className="row">
                    <label className="category-label">类别</label>
                    <input type="text" onChange={this.handleType.bind(this)} value={this.state.book.type} />
                </div>

                <div className="row">
                    <label className="category-label">价格</label>
                    <input type="text" onChange={this.handlePrice.bind(this)} value={this.state.book.price} />
                </div>

                <div className="row">
                    <label className="category-label">年份</label>
                    <input type="text" onChange={this.handleYear.bind(this)} value={this.state.book.year} />
                </div>

                <div className="row">
                    <label className="category-label">库存</label>
                    <input type="text" onChange={this.handleStock.bind(this)} value={this.state.book.stock} />
                </div>

                <div className="row">
                    <label className="category-label">总量</label>
                    <input type="text" onChange={this.handleTotal.bind(this)} value={this.state.book.total} />
                </div>

                <Button style={{ width: "250px" }} onClick={this.add.bind(this)}>入库</Button>
                <h3>{this.state.tip}</h3>

                </div>
                <div className="column" style={{ justifyContent:"flex-start" }}>
                    <label htmlFor="upload" title="上传本地文件">上传本地文件</label>
                    <input
                        type="file"
                        id="upload"
                        accept="*"
                        
                        onClick={e => e.stopPropagation()}
                        onChange={e => this.handleUpload(e.target.files)}
                        multiple
                    />

                    <div className="column" style={{ height: "300px", justifyContent:"space-between" }}>
                        <h3>添加借书证</h3>

                        <div className="row">
                            <label className="category-label">姓名</label>
                            <input type="text" onChange={this.handleCardName.bind(this)} value={this.state.card.name} />
                        </div>

                        <div className="row">
                            <label className="category-label">部门</label>
                            <input type="text" onChange={this.handleCardCompany.bind(this)} value={this.state.card.company} />
                        </div>

                        <div className="row">
                            <label className="category-label">类别</label>
                            <input type="text" onChange={this.handleCardType.bind(this)} value={this.state.card.type} />
                        </div>

                        <div className="row">
                            <label className="category-label">密码</label>
                            <input type="text" onChange={this.handleCardPassword.bind(this)} value={this.state.card.password} />
                        </div>
                        <Button bsStyle="success" onClick={this.addCard.bind(this)}>注册</Button>
                        <h3>{this.state.tip1}</h3>
                    </div>

                    <div className="column" style={{ height: "200px", justifyContent:"space-between" }}>
                        <h3>注销借书证</h3>
                        <label className="category-label">借书卡姓名</label>
                        <input type="text" onChange={this.handleRemoveCard.bind(this)} value={this.state.cardId} />
                        <Button bsStyle="danger" onClick={this.removeCard.bind(this)}>注销</Button>
                        <h3>{this.state.tip2}</h3>
                    </div>
                    </div>
                </div>
        </div >;
    }
}

