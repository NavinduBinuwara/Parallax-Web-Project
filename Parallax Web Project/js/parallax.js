
const bullets = document.querySelectorAll(".bullet-nav li");


gsap.utils.toArray("section").forEach((section, i) => {
  const id = section.dataset.id; 
  
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActiveBullet(id),    
      onEnterBack: () => setActiveBullet(id)
    }
  });
});


function setActiveBullet(id) {
  bullets.forEach(bullet => {
    bullet.classList.remove("active");
    if (bullet.dataset.id === id) {
      bullet.classList.add("active");
    }
  });
}


bullets.forEach(bullet => {
  bullet.addEventListener('click', () => {
    const sectionId = bullet.dataset.id; 
    const targetSection = document.querySelector(`section[data-id="${sectionId}"]`); 
    
    
    gsap.to(window, {
      duration: 1,  
      scrollTo: targetSection 
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    Fancybox.bind("[data-fancybox='gallery']", {
        transitionEffect: "fade",
        closeExisting: true,
    });
});




/*--------------------parallax slider -------------------------- */
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

const slideWidth = window.innerWidth;

// Animate the slides' parallax effect
function applyParallaxEffect() {
  gsap.to(slideImages, {
    xPercent: -100 * currentIndex,
    ease: "power2.out",
    duration: 1.2,
    stagger: {
      each: 0.1,
      onStart: function () {
        gsap.to(this.target, {
          scale: 1.05,
          duration: 1.2,
          ease: "power2.out",
        });
      },
      onComplete: function () {
        gsap.to(this.target, {
          scale: 1,
          duration: 1,
          ease: "power2.out",
        });
      }
    }
  });
}

// Next slide
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideImages.length;
  applyParallaxEffect();
});

// Previous slide
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideImages.length) % slideImages.length;
  applyParallaxEffect();
});

// Initial load parallax animation
applyParallaxEffect();
