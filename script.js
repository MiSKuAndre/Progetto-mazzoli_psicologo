// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

function toggleMenu(open) {
  hamburger.classList.toggle('open', open);
  mobileMenu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  mobileMenu.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.contains('open');
  toggleMenu(!isOpen);
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') toggleMenu(false);
});

// seleziona tutti gli elementi che hanno la classe "reveal"
const reveals = document.querySelectorAll('.reveal');

// crea un IntersectionObserver con callback e opzione threshold 0.1
const io = new IntersectionObserver(entries => {
  // per ogni elemento osservato (entry)...
  entries.forEach(e => {
    // ...se è entrato nella viewport (intersection)
    if (e.isIntersecting) {
      // aggiungi la classe "visible" all’elemento
      e.target.classList.add('visible');
      // smetti di osservarlo (la classe rimane, così non riparte l'interazione)
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

// per ogni elemento ".reveal", inizia ad osservarlo con l'IntersectionObserver
reveals.forEach(el => io.observe(el));

// ── COOKIE BANNER ──
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookieBanner').classList.add('hidden');
}

// Nascondi il banner se già accettato
if (localStorage.getItem('cookieConsent') === 'accepted') {
  document.getElementById('cookieBanner').classList.add('hidden');
}