document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const header = document.querySelector(".header");
  const menuItems = menu.querySelectorAll("li a");

  menuToggle.addEventListener("click", function () {
    // 切换菜单的隐藏/显示
    menu.classList.toggle("hidden");
    menu.classList.toggle("visible");

    if (menu.classList.contains("visible")) {
      header.classList.add("expanded");
    } else {
      header.classList.remove("expanded");
    }
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      menu.classList.toggle("visible");
      header.classList.remove("expanded");
    });
  });
});

