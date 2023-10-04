const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const menus = document.getElementsByClassName("menus2")[0];
let isOpen = false;
burgerMenu.addEventListener('click', () => {
    if (!isOpen) {
        menus.style.display = 'flex';
        isOpen = true;
    } else {
        burgerMenu.style.backgroundColor = '';
        menus.style.display = 'none';
        isOpen = false;
    }
})

// ===================================================
const menuItems = document.querySelectorAll(".menus1 li");
const markers = document.querySelectorAll(".marker");

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('mouseenter', () => {
        markers[index].style.display = "block";
    });

    menuItem.addEventListener('mouseleave', () => {
        markers[index].style.display = "none";
    });
});

// ==================================================
const pageCurrent = document.getElementById("page-current");
const markCurrent = document.getElementById("mark-current");
pageCurrent.addEventListener('mouseenter', () => {
    markCurrent.style.display = "none";
});

pageCurrent.addEventListener('mouseleave', () => {
    markCurrent.style.display = "block";
});


// =====================================================