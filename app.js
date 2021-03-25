// gsap animations

const tl = gsap.timeline({defaults: { ease: "power1.out" } } );

tl.to(".text", { y:"0%", duration:3, stagger: 1});
tl.to(".slider", { y: "-100%", duration: 2 });
tl.to(".intro", {y:"-100%", duration:1.5, }, "-=1.5");
tl.fromTo("nav", {opacity:0}, {opacity:1, duration:3});
tl.fromTo(".big-text", {opacity:0}, {opacity:1, duration:2},"-=2" );

// image animation
