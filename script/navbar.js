const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const menus=document.getElementsByClassName("menus2")[0];
let isOpen= false;

burgerMenu.addEventListener('click',()=>{
    if(!isOpen){
         menus.style.display ='flex';
         isOpen=true;
    }else{
        burgerMenu.style.backgroundColor = '';
         menus.style.display ='none';
         isOpen=false;
    }
})

const login= document.querySelector('.navbar .menus1 li:nth-child(5)');
const consult = document.createElement('a');
consult.href="Consult.html";
consult.innerHTML ='Consult';
login.innerHTML= '';
login.appendChild(consult);
console.log(login.innerHTML);

const login2= document.querySelector('.navbar .menus2 ul li:nth-child(5)');
const consult2 = document.createElement('a');
consult2.href="Consult.html";
consult2.innerHTML ='Consult';
login2.innerHTML= '';
login2.appendChild(consult2);
