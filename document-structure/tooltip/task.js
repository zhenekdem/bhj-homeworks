const links = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);
let lastClickedLink = null;
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        const currentLink = links[i];
        const text = links[i].getAttribute('title');
        if (tooltip.textContent === text && tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
            lastClickedLink = null;
            return;
        }
        tooltip.textContent = text;
        const coords = currentLink.getBoundingClientRect();
        tooltip.style.left = `${coords.left}px`;
        tooltip.style.top = `${coords.bottom + window.scrollY}px`;
        tooltip.classList.add('tooltip_active');
        lastClickedLink = currentLink;
    });
}