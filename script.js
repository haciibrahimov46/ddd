document.getElementById("menu-toggle").addEventListener("click", function (event) {
    const menuList = document.getElementById("menu-list");
    menuList.classList.toggle("active");
    event.stopPropagation();
});

document.addEventListener("click", function () {
    const menuList = document.getElementById("menu-list");
    if (menuList.classList.contains("active")) {
        menuList.classList.remove("active");
    }
});
