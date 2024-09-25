
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
