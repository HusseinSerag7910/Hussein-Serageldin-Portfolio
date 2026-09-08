document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.rail__toggle');
  const rail = document.querySelector('.rail');
  if (toggle && rail){
    toggle.addEventListener('click', () => rail.classList.toggle('open'));
    document.querySelectorAll('.rail__nav a').forEach(a =>
      a.addEventListener('click', () => rail.classList.remove('open'))
    );
  }

  // mark active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.rail__nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
