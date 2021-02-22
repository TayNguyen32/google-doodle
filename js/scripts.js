console.log("OK");

gsap.fromTo(
  "#bat-light",
  { opacity: 0, repeat: -1, duration: 1 },
  { opacity: 1, repeat: -1, duration: 3, yoyo: true }
);
