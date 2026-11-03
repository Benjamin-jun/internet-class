document.getElementById('year').textContent = new Date().getFullYear();
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll('.reveal,.bar').forEach(el => io.observe(el));
const form = document.querySelector('.contact-form');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const [n, m] = form.querySelectorAll('input,textarea');
  location.href = 'mailto:qkqh0430@gmail.com?subject=' + encodeURIComponent(n.value + '님의 문의') + '&body=' + encodeURIComponent(m.value);
});
