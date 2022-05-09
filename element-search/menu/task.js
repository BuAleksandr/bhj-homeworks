const menuItem = document.getElementsByClassName('menu__item');
const menuLink = document.getElementsByClassName('menu__link');
const menuActive = document.querySelector('.menu_active');
const arItem = Array.from(menuItem);

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function () {
        if (menuItem[i].querySelector('.menu_sub') !== null && menuItem[i].querySelector('.menu_active') === null) {
            arItem.forEach((element, index) => {
                if (element.querySelector('.menu_active')) {
                    arItem[index].querySelector('.menu_sub').classList.remove('.menu_active');
                }
            });

            menuItem[i].querySelector('.menu_sub').classList.add('.menu_active');
            return menuItem[i].href = false;
        } else if (menuItem[i].querySelector('.menu_sub') !== null && menuItem[i].querySelector('.menu_active') !== null) {
            menuItem[i].querySelector('.menu_sub').classList.remove('menu_active');
            return menuItem[i].href = false;
        }
    }
}
