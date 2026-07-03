function getHole(index) {
    return document.getElementById(`hole${index}`);
}

const deadElement = document.getElementById('dead');
const lostElement = document.getElementById('lost');

function resetStart() {
    deadElement.innerText = 0;
    lostElement.innerText = 0;
}

for (let i = 0; i < 9; i++) {
    const holeElement = getHole(i + 1);
    holeElement.onclick = () => {
    if(holeElement.classList.contains('hole_has-mole')) {
        deadElement.innerText++;
    } else {
        lostElement.innerText++;
    }

    if(Number(deadElement.innerText) === 10) {
        alert('победа');
        resetStart();
    } else if(Number(lostElement.innerText) === 5) {
        alert ('проигрыш');
        resetStart();
    }
    }
}