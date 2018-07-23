"use strict";
work();
let date = new Date();
function work() {

    makingWindowTextareaButton();
}
function makingWindowTextareaButton() {
    windowForIntroductionText();
    buttonIntroductionText();
    buttonWork();
}
function windowForIntroductionText() {
    let  introductionText= document.getElementById('introductionText');
    let textareaIntroductionText=document.createElement('textarea');
    introductionText.appendChild(textareaIntroductionText);
    textareaIntroductionText.id = 'textareaIntroductionText';
    textareaIntroductionText.wrap='soft';
    textareaIntroductionText.required;
}
function buttonIntroductionText() {
    document.getElementById('buttonDispatchText').innerHTML += '<button id="buttonIntroductionText">отправить</button>';
}
function buttonWork() {
    let but=document.getElementById('buttonIntroductionText');
    but.addEventListener('click', windowChat);

}
function windowChat() {
    let div=document.getElementById('ulBox');
    let p = document.createElement('p');
    p.innerHTML = date.getHours()+":"+date.getMinutes()+" "+textareaIntroductionText.value+'<br>'+'<br>';
    div.appendChild(p);
    p.id='p';
}












































