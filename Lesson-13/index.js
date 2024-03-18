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

fetchData();

async function a() {
    let prom = new Promise(function(resolve, reject) {
        setTimeout (() => (resolve('Hello'), 1000));
    });

    let result = await prom;
    console.log(result);
};

a();

const currency = async () => {
    const response = await fetch("https://api.exchangerate.host/latest?base=USD");
    if(response.ok) {
        console.log('OK');
        let = data = await response.json();
        console.log(data);
    } else {
        console.log('Error', response.status);
    };
};

currency();

const headers = new Headers({
    "Content-Type": "application/json",
    "X-Custom-Header": "castom header value",
});

headers.has("Content-Type");

const postTest = async () => {
    let user = {
        name: "John",
        surname: "Smith",
        age: 25
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
    });
};

postTest().then(console.log('Done!'));

try{
    console.log('Start');
    console.log('Finish');
} catch (error) {
    console.log(error);
};

try{
    console.log('Start');
    d;
    console.log('Finish');
} catch (error) {
    console.log('Error');
};

setTimeout(function(){
    try {
        console.log("OK");
    } catch (error) {
        console.log('Error');
    };
}, 1000);

try {
    da;
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
};

let json = ``
try {
    let data = JSON.parse(json);
} catch (error) {
    console.log(error.message);
};

let data = `{"name": "John", "age": 30}`;

try {
    let user = JSON.parse(data);
    if(!user.city) {
        throw new Error('No city');
    };
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Finally');
};

let socket = new WebSocket("wss://echo.websocket.org");

socket.onopen = function(event) {
    console.log("Connected");
    socket.send("Hello");
};

socket.onmessage = function(event) {
    console.log(event.data);
};

socket.onclose = function(event) {
    if(event.wasClean) {
        console.log('Connection closed', event.code);
    } else {
        console.log('Error');
    };
};

socket.onerror = function(error) {
    console.log(error.message);
};



