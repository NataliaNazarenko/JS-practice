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
