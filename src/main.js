import './style.css'

// Wait for DOM to load before initializing everything
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles.js
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#000000', '#333333', '#666666', '#999999', '#cccccc']
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.6,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.3,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#333333',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }

  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }));
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all sections and cards for animations
  document.querySelectorAll('section, .project-card, .assignment-card').forEach(el => {
    observer.observe(el);
  });

  // Add animation classes
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    
    section:not(.animate-in),
    .project-card:not(.animate-in),
    .assignment-card:not(.animate-in) {
      opacity: 0;
      transform: translateY(30px);
    }
  `;
  document.head.appendChild(style);

  // Typing effect for hero title
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    type();
  }

  // Initialize typing effect when page loads
  window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      const originalText = heroTitle.textContent;
      typeWriter(heroTitle, originalText, 80);
    }
  });

  // Contact form handling
  function handleContactForm() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form handling logic here
        alert('Thank you for your message! I\'ll get back to you soon.');
      });
    }
  }

  // Initialize contact form
  handleContactForm();
  
  // Add smooth reveal animations to elements
  const elements = document.querySelectorAll('.skill-tag, .tech-tag');
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
    el.classList.add('animate-in');
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const particles = document.querySelector('#particles-js');
    
    if (hero && particles) {
      const rate = scrolled * -0.5;
      particles.style.transform = `translateY(${rate}px)`;
    }
  });

  // Add loading animation
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  // Add loading styles
  const loadingStyle = document.createElement('style');
  loadingStyle.textContent = `
    body:not(.loaded) {
      overflow: hidden;
    }
    
    body:not(.loaded)::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea, #764ba2);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    body:not(.loaded)::after {
      content: 'Loading...';
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1.5rem;
      font-weight: 600;
      z-index: 10000;
      animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    body.loaded::before,
    body.loaded::after {
      display: none;
    }
  `;
  document.head.appendChild(loadingStyle);
});
