
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
    scale: 4, 
    y: 200,
    scrollTrigger: {
      trigger: "#section1",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    ease: "none" 
  });


  gsap.to(name, {
    scale: 2, 
    y:-200,
    x:-400, 
    scrollTrigger: {
      trigger: "#section1",
      start: "top center", 
      end: "bottom top", 
      scrub: true,
    },
    ease: "none" 
  });




  const A3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      start: "top 100%",  
      end: "bottom center", 
      scrub: 1,
 
    }
  });
  
  // First phase: Expand the card from one side
  A3.to(".gallery-img", {
    scale: 0.1,
    rotate: -10,
    x: -1000,
    duration: 0.1,
    
  })
  .to(".content-wrapper", {
    scale: 0.8,
    rotate: 0,
    x: 400,
    duration: 0.1, 
    delay: 0,
  })
  .to(".gallery-img", {
    scale: 0.9,
    rotate: 0,
    x: 0,
    duration: 0.1,
   
  })
  .to(".content-wrapper", {
    scale: 1,
    rotate: 0,
    x: 40,
    duration: 1, // Slower animation
    delay: 0.1,
  })



  gsap.to('#dj2', {
    scale: 4,
    y:250,
    scrollTrigger: {
      trigger: "#section4",
      start: "top 80%", 
      end: "bottom top", 
      scrub: true, 
    },
    ease: "slow(0.7,0.7,false)",
  });




