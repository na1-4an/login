"use strict"

//DOM(document object model)은 일종의 인터페이스로 자바스크립트에서 html으로 받은 데이터를 제어 가능케함.
const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        password: password.value,
    };
    console.log(req);
    
}
