document.getElementById('year').textContent = new Date().getFullYear();
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.links a').forEach(a => a.getAttribute('href') === page && a.classList.add('active'));
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
document.querySelectorAll('.filters button').forEach(b => b.onclick = () => {
  document.querySelectorAll('.filters button').forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('[data-cat]').forEach(c => c.style.display = (b.dataset.f === 'all' || c.dataset.cat === b.dataset.f) ? '' : 'none');
  const n = document.getElementById('count'); if (n) n.textContent = [...document.querySelectorAll('[data-cat]')].filter(c => c.style.display !== 'none').length + ' projects';
});
const cp = document.getElementById('copy');
if (cp) cp.onclick = () => navigator.clipboard.writeText('qkqh0430@gmail.com').then(() => { cp.textContent = '복사됨'; setTimeout(() => cp.textContent = '복사', 1500); });
const f = document.getElementById('mail');
if (f) f.onsubmit = e => { e.preventDefault(); const v = [...f.querySelectorAll('input,textarea')].map(x => x.value);
  location.href = 'mailto:qkqh0430@gmail.com?subject=' + encodeURIComponent(v[0] + '님의 문의') + '&body=' + encodeURIComponent(v[2] + '\n\n회신: ' + v[1]); };
