const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
let pollId = null;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';

xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        pollId = xhr.response.id;
        const pollData = xhr.response.data;
        pollTitle.innerText = pollData.title;
        pollAnswers.innerHTML = '';

        pollData.answers.forEach((answer) => {
            const buttonHtml = `
                <button class="poll__answer">
                    ${answer}
                </button>
            `;
            pollAnswers.insertAdjacentHTML('beforeend', buttonHtml);
        })
    }
});
xhr.send();

pollAnswers.addEventListener('click', (event) => {
    if (event.target.classList.contains('poll__answer')) {
        alert('Спасибо, ваш голос засчитан!');
    }
})