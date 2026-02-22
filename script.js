const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');
const yearEl = document.getElementById('year');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    siteNav.classList.toggle('open', !isExpanded);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('open');
    });
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
