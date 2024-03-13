const btnGet = document.querySelector("#get");
const btnPost = document.querySelector("#post");
const btnPut = document.querySelector("#put");
const btnDelete = document.querySelector("#delete");

btnGet.addEventListener("click", get);
btnPost.addEventListener("click", post);
btnPut.addEventListener("click", put);
btnDelete.addEventListener("click", deleteData);

function get() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

function post() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

function put() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
            id: 1,
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

function deleteData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

// async/await

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    return console.log(json);
};