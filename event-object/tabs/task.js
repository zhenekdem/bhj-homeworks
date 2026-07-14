const tabMenus = [...document.querySelectorAll('.tabs')];
tabMenus.forEach((tabs) =>{
    const navigation = tabs.querySelector('.tab__navigation');
    const contentsArray = tabs.querySelectorAll('.tab__content');
    const tabsArray = [...navigation.querySelectorAll('.tab')];
    navigation.addEventListener('click', (event) => {
        const clickedTab = event.target.closest('.tab');
        if (!clickedTab || clickedTab.classList.contains('tab_active')) return;
        navigation.querySelector('.tab_active')?.classList.remove('tab_active');
        clickedTab.classList.add('tab_active');
        const targetIndex = tabsArray.indexOf(clickedTab);
        tabs.querySelector('.tab__content_active')?.classList.remove('tab__content_active');
        if (contentsArray[targetIndex]) {
            contentsArray[targetIndex].classList.add('tab__content_active');
        }
    })
})