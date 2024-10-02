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






/* ------- AOS Animation ------------ */

  AOS.init();


  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const particles = new THREE.BufferGeometry();
  const particleCount = 5000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100; // x position
      positions[i * 3 + 1] = Math.random() * 50; // y position (height)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // z position
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
  });

  const smokeParticles = new THREE.Points(particles, particleMaterial);
  scene.add(smokeParticles);

  function animate() {
      requestAnimationFrame(animate);
      const positions = smokeParticles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] += Math.random() * 0.1; // Move upwards
          if (positions[i * 3 + 1] > 50) {
              positions[i * 3 + 1] = 0; // Reset height
          }
      }
      smokeParticles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
  }

  camera.position.z = 50;
  animate();

  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });