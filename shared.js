const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan .button');
const cancelButton = document.querySelector('.modal__action--negative');
const hamburger = document.querySelector('.toggle-button');
const mobileMenu = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

// displayModal = (display = true) => {
//     if (display) {
//         backdrop.style.display = 'block';
//         modal.style.display = 'block';
//     } else {
//         backdrop.style.display = 'none';
//         modal.style.display = 'none';
//     }
// };

const openModal = () => {
    backdrop.style.display = 'block';
    // modal.style.display = 'block';
    modal.classList.add('open');
};

const openMobileMenu = () => {
    backdrop.style.display = 'block';
    // mobileMenu.style.display = 'block';
    mobileMenu.classList.add('open');
};

const close = (el) => {
    // el.style.display = 'none';
    if (backdrop) backdrop.style.display = 'none';
    if (modal) modal.classList.remove('open');
    // if (mobileMenu) mobileMenu.style.display = 'none';
    if (mobileMenu) mobileMenu.classList.remove('open');
};

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', openModal);
}

backdrop.addEventListener('click', () => {
    close(backdrop);
});

if (cancelButton) {
    cancelButton.addEventListener('click', () => {
        close(modal);
        close(backdrop);
    });
}

hamburger.addEventListener('click', openMobileMenu);

mobileMenu.addEventListener('click', () => {
    close(mobileMenu);
    close(backdrop);
});

ctaButton.addEventListener('animationstart', function (event) {
    console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', function (event) {
    console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', function (event) {
    console.log('Animation iteration', event);
});
