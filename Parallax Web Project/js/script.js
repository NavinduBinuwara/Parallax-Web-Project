const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let currentSection = '';

  document.querySelectorAll('section').forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.querySelector(link.getAttribute('href'));
    
    if (targetSection) {
      gsap.to(window, {
        scrollTo: targetSection.offsetTop,
        duration: 1,
        ease: "power2.inOut"
      });
    }
  });
});


/* -----------------hamburger menu--------------------- */
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.getElementById('navbar');

// Toggle navbar visibility on hamburger menu click
hamburgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('open');
  hamburgerMenu.classList.toggle('open');
});

// Smooth scroll for desktop (existing code)
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.querySelector(link.getAttribute('href'));
    
    if (targetSection) {
      gsap.to(window, {
        scrollTo: targetSection.offsetTop,
        duration: 1,
        ease: "power2.inOut"
      });
    }

    // Close navbar on mobile after clicking a link
    navbar.classList.remove('open');
    hamburgerMenu.classList.remove('open');
  });
});





/* ------- AOS Animation ------------ */

  AOS.init();




  document.getElementById('read-more-btn').addEventListener('click', function () {
    var bodyText = document.getElementById('body-text');
    var btn = this;
    
    if (bodyText.classList.contains('show')) {
      bodyText.classList.remove('show');
      btn.textContent = 'Read More';
    } else {
      bodyText.classList.add('show');
      btn.textContent = 'Read Less';
    }
  });
  
  
  