require('./scss/main.scss');

let isMenu = document.querySelectorAll('.isMenu');
let moMenuBtn = document.querySelector('.mo-menu-btn');
let headerWrap = document.querySelector('.header-wrap');

// 메뉴 on/off
window.addEventListener('click', (e) => {
    isMenu.forEach((e) => {
        e.classList.remove('on');
    })

    if(e.target.classList.contains('isMenu')) {
        e.target.classList.add('on');
    }
});

// 모바일 햄버거메뉴 open/close
moMenuBtn.addEventListener('click', () => {
    headerWrap.classList.toggle('isOpen');
});


// resize 일정크기에서 햄버거메뉴 닫히기
window.addEventListener('resize', (e) => {
    if(!e.target.innerWidth <= 900) {
        headerWrap.classList.remove('isOpen');
    }
})