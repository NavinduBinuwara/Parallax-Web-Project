document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin)
   });
   const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section",
      start: "center center",  // Start the animation when the section's top hits the center of the viewport
      end: "bottom center", // End when the section's bottom hits the center of the viewport
      scrub: true, // Smooth animation on scroll
      markers: true // Enable markers for debugging
    }
  });
  // First phase: Expand the card from one side
  tl.to(".card", {
    scaleX: 10, // Expand width on X-axis
    duration: 1.
  });
  // Second phase: Shrink the card back to its original size
  tl.to(".card", {
    scaleX: 1, // Return to original scale
    duration: 1,
    
  });