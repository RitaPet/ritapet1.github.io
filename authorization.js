"use strict";
work();
function work(){
    makingWindowAuthorization();
}
function makingWindowAuthorization() {
    input();
    button();
    textP();
    buttonWork();
}
function input(){
    for(let num=1; num<=1; num++){
        let  authorization= document.getElementById('authorization');
        let inputName=document.createElement('input');
        authorization.appendChild(inputName);
        inputName.id = 'input' + num;
    }
}
function button(){
    document.getElementById('authorization').innerHTML += '<button id="buttonAuthorization">авторизироваться</button>';
}
function textP() {
    let p1 = document.getElementById('input1');
    p1.setAttribute('placeholder', 'имя');
}
function buttonWork() {
    let but=document.getElementById('buttonAuthorization');
    but.addEventListener('click', test);
    }
    function test() {
        if (input1.value == '') {
            alert("введите имя");
            }
            else {
            window.location.href = "html.html";
        }
}
function exportInput1Value() {
   let a= document.getElementById('input1').value;
   console.log(a);
}
