// $(".elementToScramble").scramble(4000, 20, "alphabet", true);

gsap.registerPlugin(gsap);

var timeline = gsap.timeline();

timeline.to(".textloader", {
	opacity: 1,
	duration: 0.07,
	stagger: {
		each: 0.14,
		repeat: 1,
		yoyo: true,
	},
});
timeline.to("loader", {
	display: "none",
});
