const hamButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.main-nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
const currentYear = document.querySelector('#currentyear');
currentYear.textContent = "© " + new Date().getFullYear() + " ☬ " + " Erik Mark Cuiza Orellana" + " ☬ " + " Bolivia";

document.getElementById("lastupdated").textContent = `Last modification: ${document.lastModified}`;