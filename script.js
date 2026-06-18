const topbar = document.querySelector('.topbar');

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
