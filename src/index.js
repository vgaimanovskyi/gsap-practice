import './scss/style.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
function calcDelay() {
  if (document.body.clientWidth > 991) {
    return 0
  }
  return 1.5
}
// header
gsap.from('.logo', { duration: 1, x: innerWidth * -1, ease: 'back' });
gsap.from('.logo__img', { duration: 1.5, rotation: 360 * 4 });
gsap.from('.nav__link', { duration: 1, y: '-100px', opacity: 0, delay: 1, stagger: 0.2 });
gsap.from('.hamburger', { duration: 0.5, x: '100%', opacity: 0, rotate: 360, delay: 1 });

// header background on scroll
ScrollTrigger.create({
  trigger: '.page-header',
  start: '-100px center',
  end: '10px top',
  toggleClass: 'page-header--scroll'
})

// logo-img rotate on scroll
gsap.timeline({
  scrollTrigger: {
    trigger: 'html',
    scrub: 0.2,
    start: 'top top',
    end: '+=50000',
  }
}).to('#gsap-logo-img', {
  rotation: 360 * 10,
  duration: 1,
  ease: 'none'
});

// nav link
const navLink = document.getElementsByClassName('nav__link');

for (let link of navLink) {
  link.addEventListener('click', () => {
    if (!link.classList.contains('nav__link--active')) {
      const linkRemove = document.getElementsByClassName('nav__link--active')[0];
      linkRemove.classList.remove('nav__link--active');

      link.classList.add('nav__link--active');
    }
  })
}

// advantages page
const advantages = {
  trigger: '#advantages',
  toggleActions: 'play none none none',
  start: 'top center',
}
gsap.from('#gsap-advantages-img', { scrollTrigger: advantages, duration: 1, x: innerWidth, opacity: 0, ease: 'power1', delay: calcDelay() });
gsap.from('#gsap-advantages-controls', { scrollTrigger: advantages, duration: 1.5, x: innerWidth, opacity: 0, ease: 'power1', delay: 1 });
gsap.from('.advantages__caption-text', { scrollTrigger: advantages, duration: 0.5, y: '-100%', opacity: 0, ease: 'power1', delay: 1, stagger: 0.2 });
gsap.from('.advantages__text', { scrollTrigger: advantages, duration: 1, x: innerWidth * -1, opacity: 0, ease: 'back', delay: 1.5 });
gsap.from('.advantages__link', { scrollTrigger: advantages, duration: 1, y: '-100%', opacity: 0, ease: 'power1', delay: 2.5 });
gsap.from('.btn-block--advantages', { scrollTrigger: advantages, duration: 1, x: '200%', opacity: 0, ease: 'back', delay: 1.5 });
gsap.from('.btn-block__line--advantages', { scrollTrigger: advantages, duration: 0.3, width: 0, height: 0, delay: 2 });

// .btn-line__dot
const dur = () => document.body.clientWidth < 992 ? 1 : 0.3;

const tlAdvantages = gsap.timeline({ repeat: -1 });
tlAdvantages.fromTo('.gsap-btn-line-advantages', { bottom: '100%', right: '100%' }, { duration: dur(), bottom: '0%', right: '100%' })
  .to('.gsap-btn-line-advantages', { duration: 1, bottom: '0%', right: '0%' });

const tlMode = gsap.timeline({ repeat: -1 });
tlMode.fromTo('.gsap-btn-line-mode', { bottom: '100%', right: '0%' }, { duration: 1, bottom: '0%', right: '0%' })
  .to('.gsap-btn-line-mode', { duration: 2, bottom: '0%', right: '100%' })

// characteristics page
const characteristics = {
  trigger: '#characteristics',
  toggleActions: 'play none none none',
  start: 'top center',
}
gsap.from('#gsap-characteristics-img', { scrollTrigger: characteristics, duration: 1, x: innerWidth * -1, opacity: 0, ease: 'power4', delay: calcDelay() });
gsap.from('#gsap-characteristics-controls', { scrollTrigger: advantages, duration: 1.5, x: innerWidth, opacity: 0, ease: 'power1', delay: 1 });
gsap.from('.characteristics__caption', { scrollTrigger: characteristics, duration: 0.5, x: '-100px', opacity: 0, ease: 'power1', delay: 1 });
gsap.from('.gsap-characteristics-article', { scrollTrigger: characteristics, duration: 0.5, y: '100%', opacity: 0, ease: 'power1', delay: 1.5, stagger: 0.2 });


// mode page
const mode = {
  trigger: '#mode',
  toggleActions: 'play none none none',
  start: 'top center',
}
gsap.from('#gsap-mode-img', { scrollTrigger: mode, duration: 1.5, x: innerWidth, opacity: 0, ease: 'power4', delay: calcDelay() });
gsap.from('.gsap-mode-article', { scrollTrigger: mode, duration: 1, y: '100%', opacity: 0, ease: 'power1', delay: 1 });
gsap.from('.mode__table-head', { scrollTrigger: mode, duration: 1, x: '-100px', opacity: 0, ease: 'power1', delay: 2, stagger: 0.2 });
gsap.from('.mode__table-content', { scrollTrigger: mode, duration: 1, x: '-100px', opacity: 0, ease: 'power1', delay: 2, stagger: 0.2 });
gsap.from('.btn-block--mode', { scrollTrigger: mode, duration: 1, x: '200%', opacity: 0, ease: 'back', delay: 2.5 });
gsap.from('.btn-block__line--mode', { scrollTrigger: mode, duration: 0.3, width: 0, height: 0, delay: 3.5 });

// whom page
const whom = {
  trigger: '#whom',
  toggleActions: 'play none none none',
  start: 'top center',
}
gsap.from('#whom', { scrollTrigger: whom, duration: 1, x: innerWidth * -1, opacity: 0, ease: 'power4' });
gsap.from('#gsap-whom-img', { scrollTrigger: whom, duration: 1, y: '100px', x: '-100px', opacity: 0, ease: 'power4', delay: 1 });
gsap.from('.whom__caption', { scrollTrigger: whom, duration: 1, x: '100px', opacity: 0, ease: 'power4', delay: 1.2 });
gsap.from('.whom__text', { scrollTrigger: whom, duration: 1, x: '100px', opacity: 0, ease: 'power4', delay: 1.4 });
gsap.from('.whom__link', { scrollTrigger: whom, duration: 1, x: '100px', opacity: 0, ease: 'power4', delay: 1.6 });
gsap.from('.footer', { scrollTrigger: whom, duration: 0.5, y: '100%', opacity: 0, ease: 'back', delay: 1 });



// product color switch 
const controls = document.getElementById('js-color-control');
const tabs = controls.children;

for (let tab of tabs) {
  tab.addEventListener('click', () => {
    const tabRemove = document.getElementsByClassName('color-control__tab--active')[0];
    tabRemove.classList.remove('color-control__tab--active');

    const contentRemove = document.getElementsByClassName('color__photo--active')[0];
    contentRemove.classList.remove('color__photo--active');

    let color = tab.dataset.color;
    const contentActive = document.getElementById(`js-color-${color}`);
    contentActive.classList.add('color__photo--active');

    tab.classList.add('color-control__tab--active');
  })
}

// burger click
const burger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');
const header = document.getElementById('js-page-header');

burger.addEventListener('click', () => {
  if (burger.classList.contains('hamburger--open')) {
    burger.classList.remove('hamburger--open');
    nav.classList.remove('nav--open');
    header.classList.remove('page-header--open')
  } else {
    burger.classList.add('hamburger--open');
    nav.classList.add('nav--open');
    header.classList.add('page-header--open')
  }
})