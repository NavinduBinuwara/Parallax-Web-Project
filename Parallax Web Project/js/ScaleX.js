
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

  const image = document.querySelector('.parallax-img');
  const name = document.querySelector('.name');

  gsap.to(image, {
    scale: 4, // Scale up slightly
    y: 200, // Move up slightly
    scrollTrigger: {
      trigger: "#section1",
      start: "top top", // Start animation when the section hits the top of the viewport
      end: "bottom top", // End when the bottom of the section hits the top
      scrub: true, // Smooth animation based on scroll
    },
    ease: "none" // No easing for a linear effect
  });


  gsap.to(name, {
    scale: 2, // Scale up slightly
    y:-400,
    x:-1000, // Move up slightly
    scrollTrigger: {
      trigger: "#section1",
      start: "top center", // Start animation when the section hits the top of the viewport
      end: "bottom top", // End when the bottom of the section hits the top
      scrub: true, // Smooth animation based on scroll
    },
    ease: "none" // No easing for a linear effect
  });


  // gsap.to('.gallery-img', {
  //   scale: 0.4, // Scale up slightly
  //   y:0,
  //   x:-500, // Move up slightly
  //   scrollTrigger: {
  //     trigger: "#section3",
  //     start: "top center", // Start animation when the section hits the top of the viewport
  //     end: "bottom top", // End when the bottom of the section hits the top
  //     scrub: true, // Smooth animation based on scroll
  //   },
  //   ease: "none" // No easing for a linear effect
  // });


  const A3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      start: "top 90%",  // Start the animation when the section's top hits the center of the viewport
      end: "bottom center", // End when the section's bottom hits the center of the viewport
      scrub: true, // Smooth animation on scroll
       // Enable markers for debugging
    }
  });
  // First phase: Expand the card from one side
  A3.to(".gallery-img",{
   
    scale:0.7,
    rotate:-10,
    x:-1000,
   rotate:-45,
    duration: 2,
    delay:3,
  })  
  A3.to(".content-wrapper",{
   
    scale:0.7,
    rotate:10,
    x:400,
    duration: 0,
    delay:0,
  })  
  A3.to(".gallery-img",{
    
    scale:0.7,
    rotate:1,
    x:-50,
    rotate:0,
     delay:10,
    duration: 4,
  })   
  A3.to(".content-wrapper",{
   
    scale:0.7,
    rotate:0,
    x:40,
    duration: 4,
    delay:10,
  })  
  A3.to(".gallery-img",{
    
    scale:0.7,
    rotate:1,
    x:-30,
    duration: 3,
  }) 
  A3.to(".content-wrapper",{
   
    scale:0.7,
    rotate:0,
    x:0,
    duration: 3,
    delay:2,
  })  
   A3.to(".gallery-img",{
  
    scale:0.7,
    x:0,
    duration: 2,
  })

  const A2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      start: "top 100%",  // Start the animation when the section's top hits the center of the viewport
      end: "bottom center", // End when the section's bottom hits the center of the viewport
      scrub: true, // Smooth animation on scroll
       // Enable markers for debugging
    }
  });
  // First phase: Expand the card from one side
  A3.to(".slider",{
   
    scale:2,
    rotate:46,
   
    duration: 0.3,
  })  
  A3.to(".slider",{
    
    scale:10,
    rotate:1,
    x:-20,
    duration: 0.7,
  }) 
   A3.to(".slider",{
  
    scale:1,
    x:0,
    duration: 0.8,
  })