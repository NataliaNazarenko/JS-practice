localStorage.setItem('name', 'userName');
const user = localStorage.getItem('name');
console.log(user);

function check() {
    let val = document.getElementsByName('radio');
    if(val[0].checked) {
        console.log('woman');
    } else {
        console.log('man');
    };
};

let form = document.querySelector('.form');
let firstName = document.querySelector('.nameInput');
let lastName = document.querySelector('.lastNameInput');
let age = document.getElementById('age');
let male = document.getElementsByName('radio');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const userInfo = {
        userName: firstName.value,
        userLastName: lastName.value,
        userAge: age.value,
        userMale: male[0].checked,
    };
    console.log(userInfo);
    localStorage.setItem('info', JSON.stringify(userInfo));
};

let data = localStorage.getItem('info');
console.log(JSON.parse(data));

let forma = document.querySelector('#form');
let formData = {};

forma.addEventListener('input', function(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
});

if(localStorage.getItem('formData')) {
    formData = JSON.parse(localStorage.getItem('formData'));
    for (let key in formData) {
        forma.elements[key].value = formData[key];
    };
};

