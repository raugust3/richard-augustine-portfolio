const dropdown = document.getElementById('dropdown-menu');
const hamburgerMenu = document.getElementById('hamburger-menu');
const closeButton = document.getElementById('close-button');
const closeHeader = document.getElementById('close-header');

function openMenu() {
    dropdown.classList.add('show');
    hamburgerMenu.classList.add('hide');
    closeButton.classList.add('show');
    closeHeader.classList.add('show');
}

function closeMenu() {
    dropdown.classList.remove('show');
    hamburgerMenu.classList.remove('hide');
    closeButton.classList.remove('show');
    closeHeader.classList.remove('show');
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 200);
        });
    }, 1000); // Wait 1 second before starting animations
});
