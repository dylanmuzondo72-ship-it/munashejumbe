const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(bookingForm);
    const message = `Hello Munashe Jumbe team,%0A%0AI would like to enquire about booking Munashe.%0A%0AName: ${encodeURIComponent(data.get('name') || '')}%0AOrganization / Brand: ${encodeURIComponent(data.get('organization') || '')}%0AWhatsApp: ${encodeURIComponent(data.get('phone') || '')}%0AService Needed: ${encodeURIComponent(data.get('service') || '')}%0ACampaign / Event Date: ${encodeURIComponent(data.get('date') || '')}%0AMessage: ${encodeURIComponent(data.get('message') || '')}`;
    window.open(`https://wa.me/263779874024?text=${message}`, '_blank', 'noopener');
  });
}
