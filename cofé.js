let service=document.getElementById('service');
let servicee=document.querySelector('.servicee');
let home=document.querySelector('.home');
let btn1=document.getElementById('btn1');
let incroporatione=document.querySelector('.incroporatione');
let incroporation=document.getElementById('incroporation');
let btn2=document.getElementById('btn2');
let contact=document.querySelector('.contact');
let btn3=document.getElementById('btn3');
let contactme=document.getElementById('contactme');
let skills=document.querySelector('.skills');
let btn4=document.getElementById('btn4');
let skillse=document.getElementById('skillse');


service.onclick=function(){
    servicee.classList.remove('hid');
    home.classList.add('hid');
    incroporatione.classList.add('hid');
    contact.classList.add('hid');
    skills.classList.add('fine');

}
btn1.onclick=function(){
    servicee.classList.add('hid');
    home.classList.remove('hid');
}
incroporation.onclick=function(){
    servicee.classList.add('hid');
    home.classList.add('hid');
    incroporatione.classList.remove('hid');
    contact.classList.add('hid');
    skills.classList.add('fine');
}
btn2.onclick=function(){
    incroporatione.classList.add('hid');
    home.classList.remove('hid');
}

contactme.onclick=function(){
    servicee.classList.add('hid');
    home.classList.add('hid');
    incroporatione.classList.add('hid');
    contact.classList.remove('hid');
    skills.classList.add('fine');
}
btn3.onclick=function(){
    contact.classList.add('hid');
    home.classList.remove('hid');
}

skillse.onclick=function(){
    skills.classList.remove('fine');
    servicee.classList.add('hid');
    home.classList.add('hid');
    incroporatione.classList.add('hid');
    contact.classList.add('hid');
    
}
btn4.onclick=function(){
    skills.classList.add('fine');
    home.classList.remove('hid');
}
