// 'use strict'
// const options = document.querySelector('.bottom-bar-item1');
// const optionMenu = document.querySelector ('.options');
// const app = document.querySelector ('.app');
// const news = document.querySelector ('.news');
// const updates = document.querySelector ('.updates');
// const line = document.querySelector ('.line');
// const deposit = document.querySelector ('.dep');
// const send = document.querySelector ('.send');
const body = document.querySelector ('body');
const closebtn = document.querySelector ('.close');


function myFunction() {
    document.getElementById ("myDropdown").classList.toggle("show");
    
} 
closebtn.addEventListener ( 'click', function (event) {
    if (!event.target.matches('.dropdownbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
})