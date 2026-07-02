const clickerCounter = document.getElementById('clicker__counter');
const cookieImage = document.getElementById('cookie');
const clickerSpeed = document.getElementById('clicker__speed');
let dateOfLastClick = new Date();

cookieImage.addEventListener('click', () => {
    clickerCounter.textContent++;
    const secondsDifference = (new Date() - dateOfLastClick) / 1000;
    clickerSpeed.textContent = (1 / secondsDifference).toFixed(2);
    dateOfLastClick = new Date();
    if(Number(clickerCounter.textContent) % 2 === 0) {
        cookieImage.width *= 1.5;
        cookieImage.height *= 1.5;
    } else {
        cookieImage.width /= 1.5;
        cookieImage.height /= 1.5;
    }
});