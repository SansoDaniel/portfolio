
const sections = ['hero','skills','projects','certs','footer'];
const navItems = document.querySelectorAll('.nav-item');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + current) item.classList.add('active');
    });
});

