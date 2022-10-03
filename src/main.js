require('./scss/main.scss');

let navEl = document.getElementById('nav');

navEl.addEventListener('click', function(e) {
    if(e.target.classList.contains('isMenu')) {
        const parents = e.target.parentElement;
        parents.classList.add('on');
    } else {
        return false;
    }
})
