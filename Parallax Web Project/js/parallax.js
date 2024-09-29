
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
      duration: 5000, 
      delay:6000, 
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

const totalSlides = slideImages.length;
const slidesPerView = 3; // Show 3 slides per view
const autoSlideDuration = 3000; // 3 seconds for auto slider

// Function to apply the smooth parallax effect on slides
function applyParallaxEffect() {
  gsap.to(slides, {
    xPercent: -100 * (currentIndex / slidesPerView),
    ease: "power3.inOut",  // Smooth animation easing
    duration: 1.5,         // Adjusted duration for smoothness
  });
}

// Function to move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + slidesPerView) % totalSlides;
  applyParallaxEffect();
}

// Function to move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - slidesPerView + totalSlides) % totalSlides;
  applyParallaxEffect();
}

// Next button click event
nextBtn.addEventListener('click', nextSlide);

// Previous button click event
prevBtn.addEventListener('click', prevSlide);

// Auto slide logic
let autoSlider = setInterval(nextSlide, autoSlideDuration);

// Pause auto slider on button hover (optional)
nextBtn.addEventListener('mouseenter', () => clearInterval(autoSlider));
prevBtn.addEventListener('mouseenter', () => clearInterval(autoSlider));

// Resume auto slider when hover ends (optional)
nextBtn.addEventListener('mouseleave', () => autoSlider = setInterval(nextSlide, autoSlideDuration));
prevBtn.addEventListener('mouseleave', () => autoSlider = setInterval(nextSlide, autoSlideDuration));

// Initial parallax animation on page load
applyParallaxEffect();
