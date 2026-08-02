const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.addEventListener('load', () => {
    loader.classList.remove('loader_active');

    if (xhr.status === 200) {
        itemsContainer.innerHTML = '';
        const valutes = xhr.response.response.Valute;
        for (const key in valutes) {
            const currency = valutes[key];
            const htmlNode = `
                <div class="item">
                    <div class="item__code">${currency.CharCode}</div>
                    <div class="item__value">${currency.Value}</div>
                    <div class="item__currency">руб.</div>
                </div>
            `;
            itemsContainer.insertAdjacentHTML('beforeend', htmlNode);
        }
    }
});
xhr.send();