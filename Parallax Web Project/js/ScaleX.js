
   const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".mid-image",
      start: "top 90%",  // Start the animation when the section's top hits the center of the viewport
      end: "bottom center", // End when the section's bottom hits the center of the viewport
      scrub: true, // Smooth animation on scroll
       // Enable markers for debugging
    }
  });
  // First phase: Expand the card from one side
  tl.to(".mid-image",{
    rotate:-20,
    scale:3,
    duration: 0.1,
  })
  tl.to(".card", {

    scale: 0.7, // Expand width on X-axis
    duration: 0.1,
  
    rotate:24

  });
  tl.to(".mid-image",{
    rotate:0,
    scale:1,
    duration: 0.5,
  })

  tl.to(".card", {

    scale: 2, // Expand width on X-axis
    duration: 0.2,
    y:0,
    rotate:10

    
  });
  tl.to(".mid-image",{
    rotate:10,
    scale:1,
    duration: 0.2,
  })

  tl.to(".card", {

    scale: 2, // Expand width on X-axis
    duration: 0.2,
    y:0,
    rotate:0

    
  });
  tl.to(".mid-image",{
    rotate:0,
    scale:1,
    duration: 0.2,
  })
 
  // Second phase: Shrink the card back to its original size

 