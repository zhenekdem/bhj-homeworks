const signinBlock = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

const savedUserId = localStorage.getItem('user_id');

if (savedUserId) {
    userIdSpan.textContent = savedUserId;
    welcomeBlock.classList.add('welcome_active');
    signinBlock.classList.remove('signin_active');
}

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', signinForm.action);

    const formData = new FormData(signinForm);
    xhr.send(formData);

        xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (response.success) {
                localStorage.setItem('user_id', response.user_id);
                
                userIdSpan.textContent = response.user_id;
                welcomeBlock.classList.add('welcome_active');
                signinBlock.classList.remove('signin_active');
            } else {
                alert('Неверный логин/пароль');
            }
        } else {
            alert('Ошибка сервера: ' + xhr.status);
        }
        
        signinForm.reset();
    };
});