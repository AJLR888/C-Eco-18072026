const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-navigation');
const form = document.getElementById('interest-form');
const formSuccess = document.getElementById('form-success');
const currentYear = document.getElementById('current-year');
const lightbox = document.getElementById('image-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.querySelector('.lightbox__close');
const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle('site-header--scrolled', window.scrollY > 20);
};

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.remove('lightbox--open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
};

const openLightbox = (image) => {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightbox.classList.add('lightbox--open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
};

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

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

lightboxTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => openLightbox(trigger));
  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox(trigger);
    }
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('lightbox--open')) {
      closeLightbox();
    }
  });
}
