document.addEventListener('DOMContentLoaded', function(){
    const dropdownToggle = document.querySelectorAll('[data-dropdown-toggle]');
    dropdownToggle.forEach((toggle) => {
        toggle.addEventListener('click', function() {
            const parent = this.closest('.dropdown-item');
            parent.classList.toggle('active');
        })
    })
})

//Galeria
const imagens = document.querySelectorAll('.galeria img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

imagens.forEach((img) => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
    })
})

//esconder o lightbox
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
})

const openLoginBtn = document.getElementById('openLogin')
const containerLogin = document.querySelector('.container-login')

openLoginBtn.addEventListener('click', () => {
    containerLogin.classList.add('active')
})

// Fechar ao clicar fora do formulário ou pressionar ESC
containerLogin.addEventListener('click', (e) => {
    if(e.target === containerLogin) {
        containerLogin.classList.remove('active')
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        containerLogin.classList.remove('active')
    }
})