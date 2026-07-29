const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-navigation');
const form = document.getElementById('interest-form');
const formSuccess = document.getElementById('form-success');
const currentYear = document.getElementById('current-year');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('site-nav--open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const consent = document.getElementById('consent');
    if (consent && consent.checked) {
      form.reset();
      formSuccess.classList.remove('hidden');
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      formSuccess.classList.add('hidden');
    }
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
