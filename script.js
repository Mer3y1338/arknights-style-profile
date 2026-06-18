const root = document.documentElement;
const topbar = document.querySelector('.topbar');

window.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5).toFixed(3);
  const y = (event.clientY / window.innerHeight - 0.5).toFixed(3);
  root.style.setProperty('--mx', x);
  root.style.setProperty('--my', y);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('section, .work-card, .timeline li').forEach((element) => {
  element.classList.add('reveal-item');
  observer.observe(element);
});

window.addEventListener('scroll', () => {
  if (!topbar) return;
  topbar.dataset.compact = window.scrollY > 80 ? 'true' : 'false';
}, { passive: true });
