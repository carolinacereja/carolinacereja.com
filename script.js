// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Contact form feedback (sem backend — abre mailto como fallback)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  const feedback = document.getElementById('formFeedback');
  feedback.style.display = 'block';
  feedback.textContent = 'Obrigada pelo contato, ' + name + '! Em breve retorno sua mensagem.';

  // Fallback: abre o cliente de email com os dados preenchidos
  const mailto = `mailto:carolina@carolinacereja.com?subject=Contato via carolinacereja.com&body=Nome: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
  window.location.href = mailto;

  this.reset();
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.about-grid, .stats-grid, .contact-grid').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});
