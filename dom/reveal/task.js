const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    const viewportHeight = window.innerHeight;
    reveals.forEach(reveal => {
        const {top, bottom} = reveal.getBoundingClientRect();
        if (top < viewportHeight && bottom > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});