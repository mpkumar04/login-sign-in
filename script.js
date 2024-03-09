const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const closePopup=document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
	wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
	wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
	wrapper.classList.add('active-popup');
});

closePopup.addEventListener('click', ()=>{
	wrapper.classList.remove('active-popup');
});


let menu=document.getElementById('nav');
let open=document.getElementById('menu-btn');
let close=document.getElementById('close');

function openmenu(){
    menu.style.left="0";
    open.style.display="none";
    close.style.display="block"
}
function closemenu(){
    menu.style.left="-100%";
    open.style.display="block";
    close.style.display="none"
}


function change(){
    var nav1=document.getElementById('nav');
    var value =window.scrollY;
    if(value>80){
        nav.classList.add("nav-change");
    }else{
        nav.classList.remove("nav-change")
    }
}

window.addEventListener("scroll",change);
