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
	ease:"back.out(2.7)",
	yoyo:true,
})


const races = document.querySelector(".races");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".racesWrapper",
	start:"top 20%",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:true,
	animation:tween,
	scrub:1,
	invalidateOnRefresh:true,
	markers:true
})


   