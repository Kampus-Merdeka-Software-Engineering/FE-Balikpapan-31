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