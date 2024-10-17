
const home_btn = document.getElementById('homeButton')

home_btn.addEventListener('click', function() { // Zwraca na pierwszą strone
    window.location.href = '../index.html';
});

function scroll_to_top() { // Scroll w góre
    window.scrollTo({top: 0, behavior: 'smooth'});
}