const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

document.querySelector('#quote-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('.form-status');
    const formData = new FormData(event.target);
    const message = `Hello FlowMaster, my name is ${formData.get('name')}. I am in ${formData.get('location')} and need help with ${formData.get('service')}. ${formData.get('message') || ''}`;
    status.textContent = 'Opening WhatsApp so we can arrange your visit.';
    window.open(`https://wa.me/2348035550198?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    event.target.reset();
});
