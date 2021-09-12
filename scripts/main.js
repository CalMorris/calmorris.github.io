window.onload = function () {

    const links = document.querySelector('.nav-links');
    const hamburgerMenu = document.querySelector('.hamburger-wrapper');

    hamburgerMenu.addEventListener("click", () => {
        if (links.style.display === 'none' || links.style.display === '') {
            links.style.display = 'block'
        } else {
            links.style.display = 'none'
        };
    });
}