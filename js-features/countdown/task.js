const timerElement = document.getElementById('timer');

const intervalId = setInterval(() => {
    const currentTimeString = timerElement.textContent;
    const timeParts = currentTimeString.split(':');
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);
    let seconds = parseInt(timeParts[2]);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    totalSeconds -= 1;
    if(totalSeconds <= 0) {
        clearInterval(intervalId);
        timerElement.textContent = "00:00:00";
        alert('Вы победили в конкурсе!');
        const downloadLink = document.createElement('a');
        downloadLink.href = 'https://i.pinimg.com/736x/1c/7a/f2/1c7af28fe5417be492c3779afb87c9c1.jpg';
        downloadLink.download = 'cool_cat.jpg';
        downloadLink.click();
        return;
    }

    let newHours = Math.floor(totalSeconds / 3600);
    let newMinutes = Math.floor((totalSeconds % 3600) / 60);
    let newSeconds = totalSeconds % 60;

    const formattedHours = String(newHours).padStart(2, '0');
    const formattedMinutes = String(newMinutes).padStart(2, '0');
    const formattedSeconds = String(newSeconds).padStart(2, '0');

    timerElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}, 1000);