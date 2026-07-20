const book = document.getElementById('book');
const fontSizeButtons = document.querySelectorAll('.font-size');
const textColorButtons = document.querySelectorAll('.book__control_color .color');
const bgColorButtons = document.querySelectorAll('.book__control_background .color');
fontSizeButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        btn.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');
        const size = btn.dataset.size;
        if (size === 'small') book.classList.add('book_fs-small');
        if (size === 'big') book.classList.add('book_fs-big');
    });
});
textColorButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.book__control_color .color_active').classList.remove('color_active');
        btn.classList.add('color_active');
        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        const textColor = btn.dataset.textColor;
        book.classList.add(`book_color-${textColor}`);
    });
});
bgColorButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.book__control_background .color_active').classList.remove('color_active');
        btn.classList.add('color_active');
        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        const bgColor = btn.dataset.bgColor;
        book.classList.add(`book_bg-${bgColor}`);
    });
});