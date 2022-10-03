require('./scss/main.scss');

let navEl = document.getElementById('nav');

navEl.addEventListener('click', function(e) {
    if(e.target.classList.contains('isMenu')) {
        e.target.parentElement.classList.add('on');
    } else {
        return false;
    }
})
