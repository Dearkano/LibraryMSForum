import { Book } from './Components/ManageCenter';
export function formAuthorization() {
    const token = localStorage.getItem("token");
    const headers = { "Authorization": token, "Content-Type": "application/json" };
    return headers;
}
async function CC98Fetch(_url, jsonStr) {
    const headers = formAuthorization();
    const url = `http://localhost:62376/api/` + _url;
    const response = await fetch(url, { method: "POST", headers, body: jsonStr });
    return response;
}
export async function login(name, password) {
    const url = encodeURI(`http://localhost:62376/api/login`);
    const headers = { "Content-Type": "application/json" };
    const body = JSON.stringify({ name: name, password: password });
    const response = await fetch(url, { method: "POST", headers, body });
    const data = await response.text();
    return data;
}

export async function getMyCard() {
    const headers = formAuthorization();
    const response = await fetch("http://localhost:62376/api/card/me", { headers });
    const data = await response.json();
    return data;
}

export async function search(data) {
    const url = 'books/search';
    const response = await CC98Fetch(url, JSON.stringify(data));
    return await response.json();
}
export async function getSingleBook(name) {
    const url = `http://localhost:62376/api/books/name/${name}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[0];
}
export async function borrow(id) {
    const headers = formAuthorization();
    const response = await fetch(`http://localhost:62376/api/br/borrow/${id}`, { headers });
    const data = await response.text();
    return data;
}
export async function returnBook(id) {
    const headers = formAuthorization();
    const response = await fetch(`http://localhost:62376/api/br/return/${id}`, { headers });
    const data = await response.text();
    return data;
}
export async function bookState(id) {
    const headers = formAuthorization();
    const response = await fetch(`http://localhost:62376/api/books/state/${id}`, { headers });
    const data = await response.json();
    return data;
}

export async function getUnacceptedBooks() {
    const url = 'http://localhost:62376/api/br/getcheck';
    const headers = formAuthorization();
    const response = await fetch(url, { headers });
    const data = await response.json();
    return data;
}
export async function check(bid, cid) {
    const url = `http://localhost:62376/api/br/check/${bid}/${cid}`;
    const headers = formAuthorization();
    await fetch(url, { headers });

}
export async function refuse(bid, cid) {
    const url = `http://localhost:62376/api/br/check/${bid}/${cid}`;
    const headers = formAuthorization();
    await fetch(url, { headers });
}
export async function getMyBooks() {
    const url = `http://localhost:62376/api/card/books/me`;
    const headers = formAuthorization();
    const response = await fetch(url, { headers });
    return await response.json();
}

export async function add(book: Book) {
    const url = "books/add";
    const response = await CC98Fetch(url, JSON.stringify(book));
    if (response.status == 200)
        return "ojbk";
    else
        return "error";
}

export async function addCard(card) {
    const url = `card/add`;
    const response = await CC98Fetch(url, JSON.stringify(card));
    let str;
    if (response.status == 200)str="ojbk";
    else str = "error";
    return str;
}

export async function removeCard(id) {
    const url = `http://localhost:62376/api/card/remove/${id}`;
    const headers = formAuthorization();
    const response = await fetch(url, { headers });
    let str;
    if (response.status == 200) str = "ojbk";
    else str = "error";
    return str;
}