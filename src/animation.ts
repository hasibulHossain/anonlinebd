import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

// tl.set('.hero-title', {x: '-100%'})
// tl.set('.hero-para', {opacity: 0, y: '10%'})

tl.from('.hero-title', {
    x: '-100%',
    duration: 2,
    ease: "power4.out"
}).from('.hero-para', {
    opacity: 0,
    duration: 1.5,
    y: '10%',
    ease: "power4.out"
}, "-=1.5")

// package card animation//
const packagesCard = document.querySelectorAll<HTMLDivElement>('.package-card');

packagesCard.forEach((element, i) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: '-100px 80%',
        },
        duration: 1,
        x: i % 2 ? "-100%" : "100%",
    })
})


// FTP links

gsap.from('.ftp-link', {
   scrollTrigger: {
    trigger: '.ftp-link',
    start: 'top 90%',
   },
   duration: 1,
   stagger: 0.2,
   x: '-50%'
})