let menuIcon = document.querySelector('.menu__icon');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container');

menuIcon.onclick = function() {
    sidebar.classList.toggle("small__sidebar");
    container.classList.toggle("large__container");
}
