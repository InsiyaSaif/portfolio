const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const floatingTop = document.querySelector('.floating-top');
const hero = document.querySelector('.hero');
const updateFloatingTop = () => {
  floatingTop.classList.toggle('visible', window.scrollY > hero.offsetHeight * 0.75);
};
window.addEventListener('scroll', updateFloatingTop, { passive: true });
updateFloatingTop();

