const rotators = document.querySelectorAll('.rotator');
rotators.forEach((rotator) => {
const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
const activeCase = rotator.querySelector('.rotator__case_active');
if (activeCase && activeCase.dataset.color) {
    activeCase.style.color = activeCase.dataset.color;
}

function changeCase() {
    const activeIndex = cases.findIndex(item => item.classList.contains('rotator__case_active'));
    const currentCase = cases[activeIndex];
    currentCase.classList.remove('rotator__case_active');
    const nextIndex = (activeIndex + 1) % cases.length;
    const nextCase = cases[nextIndex];
    nextCase.classList.add('rotator__case_active');
    if (nextCase.dataset.color) {
        nextCase.style.color = nextCase.dataset.color;
    }
    const speed = nextCase.dataset.speed ? parseInt(nextCase.dataset.speed) : 1000;
    setTimeout(changeCase, speed);
}
const initialSpeed = activeCase?.dataset.speed ? parseInt(activeCase.dataset.speed) : 1000;
setTimeout(changeCase, initialSpeed);
})