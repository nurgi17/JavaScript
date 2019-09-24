function modal() {
    desBtn = document.querySelectorAll('.description-btn');
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showModal() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    }

    more.addEventListener('click', showModal);
    close.addEventListener('click', closeModal);
    for (let i = 0; i < desBtn.length; i++) {
        desBtn[i].addEventListener('click', showModal);
    }
}
module.exports = modal;