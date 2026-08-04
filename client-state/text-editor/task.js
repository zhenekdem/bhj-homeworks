const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clear-btn');

editor.value = localStorage.getItem('editorText') || '';
editor.addListener('input', () => {
    localStorage.setItem('editorText', editor.value);
});

clearBtn.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('editorText');
})