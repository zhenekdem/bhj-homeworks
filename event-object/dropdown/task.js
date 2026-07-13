const dropdowns = [...document.querySelectorAll('.dropdown')];
document.addEventListener('click', (event) => {
 const clickedValue = event.target.closest('.dropdown__value');
 if (clickedValue) {
    const parentDropdown = clickedValue.closest('.dropdown');
    const dropdownList = parentDropdown.querySelector('.dropdown__list');
    dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== parentDropdown) {
            otherDropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
        }
    });
    dropdownList.classList.toggle('dropdown__list_active');
    return;
 }

 const clickedLink = event.target.closest('.dropdown__link');
 if (clickedLink) {
    event.preventDefault();
    const parentDropdown = clickedLink.closest('.dropdown');
    const dropdownValue = parentDropdown.querySelector('.dropdown__value');
    const dropdownList = parentDropdown.querySelector('.dropdown__list');
    dropdownValue.textContent = clickedLink.textContent.trim();
    dropdownList.classList.remove('dropdown__list_active');
 }
});