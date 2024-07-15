const text = new SplitType("#hero-text");

gsap.from(".char", {
	y:150,
	stagger:0.10,
	duration:.5,
	rotate:360,
	opacity:0,
	ease:"back.out(1.7)",
})

gsap.from("#digiman", {
	y:-450,
	// x:600,
	duration:5,
	scale:0,
	opacity:0,
	ease:"back.out(1.7)",
	yoyo:true,
})

gsap.from(".binary", {
	y:10,
	duration:5,
	scale:22,
	opacity:0,
	ease:"back.out(1.7)",
	delay:1,
	repeat:-1,
	
})



gsap.registerPlugin(ScrollTrigger)
// gsap.defaults({ease:"none", duration:2})

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
	xPercent:-1000,
	ease:"none",
	// duration:15,
	scrollTrigger:{
		trigger:".slide-container",
		start:"top top",
		pin:true,
		// pinSpacing:false,
		scrub:1,
		snap:1 / 10,
		markers:true,
		endTrigger: "#end-trigger",
		end:"bottom bottom",
		// end:() => "+=" + document.querySelector(".container").offsetWidth

	}
})
