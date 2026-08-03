const form = document.getElementById('form');
const progress = document.getElementById('progress');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.addEventListener('progress', (event) => {
        if(event.lengthComputable) {
            const percentComplete = event.loaded / event.total;
            progress.value = percentComplete;
        }
    });

    xhr.addEventListener('load', () => {
        if (xhr.status === 200 || xhr.status === 201) {
            alert('Файл успешно загружен на сервер!');
        } else {
            alert('Произошла ошибка при загрузке.');
        }
    });
    xhr.send(formData);
})