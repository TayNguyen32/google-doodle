console.log("OK");

gsap.fromTo(
  "#bat-light",
  { opacity: 0, repeat: -1, duration: 1 },
  { opacity: 1, repeat: -1, duration: 3, yoyo: true }
);

let tl1 = gsap.timeline();
let tl2 = gsap.timeline();

// Box 1
tl1.to("#moving-bat", { x: 670, duration: 1, delay: 3.5 });

tl1.to("#moving-bat", {
  rotation: 180
});

tl1.to("#moving-bat", {
  x: -70,
  rotation: 180,
  duration: 1
});

tl1.to("#moving-bat", {
  rotation: 360
});

tl1.to("#moving-bat", {
  x: 670,
  duration: 1
});

tl1.to("#moving-bat", {
  rotation: 180
});

tl1.to("#moving-bat", {
  x: -70,
  duration: 1
});
