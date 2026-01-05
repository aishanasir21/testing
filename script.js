
// FAST LOADING: Start immediately without waiting
(function () {
  'use strict';

  // Mark loading screen as visible immediately
  document.getElementById('loadingScreen').classList.add('critical-show');

  // Start animations on DOM ready (not window load)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();
// FIX FIXED INQUIRY BUTTON (WhatsApp)
  const fixedInquiryBtn = document.getElementById('fixedInquiryBtn');
  if (fixedInquiryBtn) {
    console.log('Fixing fixed inquiry button');
    
    const newFixedBtn = fixedInquiryBtn.cloneNode(true);
    fixedInquiryBtn.parentNode.replaceChild(newFixedBtn, fixedInquiryBtn);
    
    newFixedBtn.addEventListener('click', function(e) {
      console.log('Fixed Inquiry clicked');
      e.preventDefault();
      e.stopPropagation();
      
      const phoneNumber = '+971505032497';
      const message = 'Hello Graps Tech, I would like to inquire about your maintenance services in UAE.';
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      window.open(whatsappURL, '_blank');
    }, true);
  }
  
  // FIX FOOTER INQUIRY BUTTON (WhatsApp)
  const footerInquiryBtn = document.getElementById('footerInquiryBtn');
  if (footerInquiryBtn) {
    console.log('Fixing footer inquiry button');
    
    const newFooterBtn = footerInquiryBtn.cloneNode(true);
    footerInquiryBtn.parentNode.replaceChild(newFooterBtn, footerInquiryBtn);
    
    newFooterBtn.addEventListener('click', function(e) {
      console.log('Footer Inquiry clicked');
      e.preventDefault();
      e.stopPropagation();
      
      const phoneNumber = '+971505032497';
      const message = 'Hello Graps Tech, I would like to inquire about your maintenance services in UAE.';
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      window.open(whatsappURL, '_blank');
    }, true);
  }

// Smooth scrolling for navigation
document.querySelectorAll('.center-pill a, .site-navigation a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');

    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Update active state in navbar
        updateActiveNavLink(targetId);

        // Smooth scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 90, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    } else {
      // Regular link, navigate normally
      window.location.href = targetId;
    }
  });
});

// Update active nav link
function updateActiveNavLink(targetId) {
  // Remove active class from all nav links
  document.querySelectorAll('.center-pill a, .site-navigation a').forEach(link => {
    link.classList.remove('active');
    link.querySelector('.nav-underline')?.classList.remove('active');
  });

  // Add active class to clicked link
  const activeLink = document.querySelector(`.center-pill a[href="${targetId}"], .site-navigation a[href="${targetId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
    activeLink.querySelector('.nav-underline')?.classList.add('active');
  }
}

// Highlight active section on scroll
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id], .footer-section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id') || 'footer';

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      updateActiveNavLink(`#${sectionId}`);
    }
  });
});

// Scroll to top functionality
const circleArrow = document.getElementById('circleArrow');
if (circleArrow) {
  circleArrow.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
function initAnimations() {
  const masterTL = gsap.timeline();

  // PHASE 1: Quick loading animation
  masterTL
    .to('#loadingProgress', {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut"
    })

    .to('#loadingLine1', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "+=0.1")

    .to('#loadingLine2', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")

    .to('#loadingBottom', {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")

    // Short pause
    .to({}, { duration: 0.3 })

    // Hide loading elements quickly
    .to(['#loadingLine1', '#loadingLine2'], {
      y: -80,
      opacity: 0,
      duration: 0.6,
      ease: "power3.in",
      stagger: 0.1
    })

    .to('#loadingBottom', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.in"
    }, "-=0.5")

    .to('#loadingProgress', {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    }, "-=0.5")

    .to('#loadingScreen', {
      opacity: 0,
      duration: 0.4,
      onComplete: function () {
        document.getElementById('loadingScreen').style.display = 'none';
      }
    });

  // PHASE 2: Show main content with staggered animations
  masterTL
    .to('#mainContent', {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })

    // Topbar elements
    .to('#topbar', {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")

    .to('#logo', {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.5")

    // Featured label
    .to('#featuredLabel', {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")

    // Headlines
    .to('#headlineLine1', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3")

    .to('#headlineLine2', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")

    // Bottom text
    .to('#bottomTextLeft', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")

    .to('#bottomTextRight', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")

    // Videos slide in from sides
    .to('#videoLeft', {
      x: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out"
    }, "-=0.4")

    .to('#videoRight', {
      x: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out"
    }, "-=0.5")

    // UI elements
    .to('#centerPill', {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")

    .to('#fixedInquiryBtn', {
      x: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out"
    }, "-=0.4")

    .to('#circleArrow', {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out"
    }, "-=0.4");

  // Animate about section in
  masterTL
    .from('.bk-about-section', {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.2")
    .from('.bk-about-top', {
      y: 20,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.6")
    .from('.bk-about-heading', {
      y: 30,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out"
    }, "-=0.5")
    .from('.bk-about-img', {
      y: 40,
      opacity: 0,
      duration: 1.45,
      ease: "power3.out"
    }, "-=0.4")
    .from('.bk-about-text', {
      y: 40,
      opacity: 0,
      duration: 1.45,
      ease: "power3.out"
    }, "-=0.3");

  // Setup interactions
  setupInteractions();
}

function setupInteractions() {
  // Send inquiry hover
  const sendInquiry = document.getElementById('fixedInquiryBtn');
  if (sendInquiry) {
    sendInquiry.addEventListener('mouseenter', () => {
      gsap.to(sendInquiry, { scale: 1.05, duration: 0.15 });
      gsap.to(sendInquiry.querySelector('.arrow'), { x: 3, duration: 0.15 });
    });
    sendInquiry.addEventListener('mouseleave', () => {
      gsap.to(sendInquiry, { scale: 1, duration: 0.15 });
      gsap.to(sendInquiry.querySelector('.arrow'), { x: 0, duration: 0.15 });
    });
  }

  // Circle arrow hover
  const circleArrow = document.getElementById('circleArrow');
  if (circleArrow) {
    circleArrow.addEventListener('mouseenter', () => {
      gsap.to(circleArrow, { scale: 1.05, duration: 0.15 });
      gsap.to(circleArrow.querySelector('i'), { rotation: 0, duration: 0.15 });
    });
    circleArrow.addEventListener('mouseleave', () => {
      gsap.to(circleArrow, { scale: 1, duration: 0.15 });
      gsap.to(circleArrow.querySelector('i'), { rotation: -45, duration: 0.15 });
    });

    circleArrow.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }

  // Instagram link hover
  const instagramLink = document.getElementById('instagramLink');
  if (instagramLink) {
    instagramLink.addEventListener('mouseenter', () => {
      gsap.to(instagramLink.querySelector('span:last-child'), {
        x: 3,
        y: -3,
        duration: 0.15
      });
    });
    instagramLink.addEventListener('mouseleave', () => {
      gsap.to(instagramLink.querySelector('span:last-child'), {
        x: 0,
        y: 0,
        duration: 0.15
      });
    });
  }

  // Nav pill hover
  document.querySelectorAll('.center-pill a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { scale: 1.05, duration: 0.15 });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { scale: 1, duration: 0.15 });
    });
  });

  // About section button hovers
  document.querySelectorAll('.bk-btn-main').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.05, duration: 0.15 });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.15 });
    });
  });

  document.querySelectorAll('.bk-pill').forEach(pill => {
    pill.addEventListener('mouseenter', () => {
      gsap.to(pill, { scale: 1.05, duration: 0.15 });
    });
    pill.addEventListener('mouseleave', () => {
      gsap.to(pill, { scale: 1, duration: 0.15 });
    });
  });
}

// Subtle animation for headlines
setTimeout(() => {
  gsap.to('#headlineLine1, #headlineLine2', {
    y: '-=2',
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}, 2000);

// Initialize portfolio section after page loads
document.addEventListener('DOMContentLoaded', function () {
  // Check if portfolio section exists
  const portfolioSection = document.getElementById('portfolioSection');
  if (!portfolioSection) return;

  const projectSection = document.getElementById('projectSection');
  const viewCircle = document.getElementById('viewCircle');

  let isInSection = false;
  let mouseX = 0;
  let mouseY = 0;
  let circleX = 0;
  let circleY = 0;
  let animationId = null;

  // Smooth follow animation using requestAnimationFrame
  function animateCircle() {
    // Smooth interpolation (lerp) for smooth following
    const ease = 0.15; // Adjust for speed (lower = smoother, slower)

    // Calculate distance to move
    const dx = mouseX - circleX;
    const dy = mouseY - circleY;

    // Move circle towards cursor
    circleX += dx * ease;
    circleY += dy * ease;

    // Update circle position
    viewCircle.style.left = `${circleX}px`;
    viewCircle.style.top = `${circleY}px`;

    // Continue animation
    animationId = requestAnimationFrame(animateCircle);
  }

  // Track mouse movement
  function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Check if cursor is inside project section
    if (projectSection) {
      const rect = projectSection.getBoundingClientRect();
      isInSection =
        mouseX >= rect.left &&
        mouseX <= rect.right &&
        mouseY >= rect.top &&
        mouseY <= rect.bottom;

      // Show/hide circle based on cursor position
      if (isInSection) {
        viewCircle.classList.add('visible');

        // Add hover effect when cursor is near the circle
        const circleRect = viewCircle.getBoundingClientRect();
        const circleCenterX = circleRect.left + circleRect.width / 2;
        const circleCenterY = circleRect.top + circleRect.height / 2;
        const distance = Math.sqrt(
          Math.pow(mouseX - circleCenterX, 2) +
          Math.pow(mouseY - circleCenterY, 2)
        );

        if (distance < (circleRect.width / 2)) {
          viewCircle.classList.add('hover');
        } else {
          viewCircle.classList.remove('hover');
        }
      } else {
        viewCircle.classList.remove('visible', 'hover');
      }
    }
  }

  // Handle mouse enter/leave for the section
  if (projectSection) {
    projectSection.addEventListener('mouseenter', () => {
      isInSection = true;
      viewCircle.classList.add('visible');
    });

    projectSection.addEventListener('mouseleave', () => {
      isInSection = false;
      viewCircle.classList.remove('visible', 'hover');
    });

    // Handle circle click
    projectSection.addEventListener('click', (e) => {
      if (isInSection) {
        // Check if click is near the circle
        const circleRect = viewCircle.getBoundingClientRect();
        const circleCenterX = circleRect.left + circleRect.width / 2;
        const circleCenterY = circleRect.top + circleRect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - circleCenterX, 2) +
          Math.pow(e.clientY - circleCenterY, 2)
        );

        if (distance < (circleRect.width / 2)) {
          e.preventDefault();
          // Navigate to project page or show modal
          window.location.href = '#project-details';
          // Or show a modal: showProjectModal();
        }
      }
    });
  }

  // Start animation
  if (viewCircle) {
    // Initialize circle position to center of screen
    circleX = window.innerWidth / 2;
    circleY = window.innerHeight / 2;
    viewCircle.style.left = `${circleX}px`;
    viewCircle.style.top = `${circleY}px`;

    animateCircle();
  }

  // Add event listener for mouse movement
  document.addEventListener('mousemove', handleMouseMove);

  // Clean up animation on page unload
  window.addEventListener('beforeunload', () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    // Update circle position on resize
    if (isInSection) {
      viewCircle.classList.add('visible');
    }
  });
});



// Optimized word-by-word animation for services section (Light version)
document.addEventListener('DOMContentLoaded', function () {
  const servicesSectionLight = document.querySelector('.services-section-light');
  
  if (!servicesSectionLight) return;

  const serviceRowsLight = document.querySelectorAll('.service-row-light');
  const wordsLight = document.querySelectorAll('.bk-about-heading-light .word-light');
  
  // Check if on mobile device
  const isMobile = window.innerWidth <= 768;
  
  // Simplified observer with mobile-optimized settings
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start simplified animations
        startWordRevealLight();
        
        // Simpler row animation - no staggering on mobile
        serviceRowsLight.forEach((row, index) => {
          const delay = isMobile ? 0 : index * 150; // Reduced delay on mobile
          setTimeout(() => {
            row.classList.add('visible');
          }, delay);
        });
      }
    });
  }, {
    threshold: isMobile ? 0.1 : 0.2, // Lower threshold for mobile
    rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
  });

  observer.observe(servicesSectionLight);

  // Optimized word reveal function
  function startWordRevealLight() {
    // Reduce animation time on mobile
    const wordDelay = isMobile ? 40 : 60;
    const animationDuration = isMobile ? 0.4 : 0.6;
    
    wordsLight.forEach((word, index) => {
      // Skip animation if GSAP is not available or on slow mobile
      if (isMobile && !('ontouchstart' in window) && !window.gsap) {
        word.classList.add('revealed');
        return;
      }
      
      setTimeout(() => {
        word.classList.add('revealed');
        
        // Only use GSAP if available and not on low-end mobile
        if (window.gsap && (!isMobile || window.innerWidth > 480)) {
          gsap.fromTo(word, {
            opacity: 0,
            y: 10 // Reduced movement for mobile
          }, {
            opacity: 1,
            y: 0,
            duration: animationDuration,
            ease: "power2.out"
          });
        }
      }, index * wordDelay);
    });
  }

  // Simplified click handlers
  const moreBtns = servicesSectionLight.querySelectorAll('.btn-more-light');
  moreBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Optional: Add simple animation on click
      if (window.gsap) {
        gsap.to(btn, { 
          scale: 0.95, 
          duration: 0.1, 
          yoyo: true, 
          repeat: 1 
        });
      }
    });
  });

  // Add lighter GSAP animation only on desktop
  if (servicesSectionLight && window.gsap && !isMobile) {
    gsap.from(servicesSectionLight, {
      y: 30, // Reduced movement
      opacity: 0,
      duration: 0.8, // Shorter duration
      ease: "power2.out",
      scrollTrigger: {
        trigger: servicesSectionLight,
        start: "top 85%", // Trigger earlier
        toggleActions: "play none none none" // Play once only
      }
    });
  }

  // Only add hover effects on non-touch devices
  if (!('ontouchstart' in window)) {
    const images = servicesSectionLight.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('mouseenter', () => {
        if (window.gsap) {
          gsap.to(img, {
            scale: 1.02,
            duration: 0.2, // Faster hover
            ease: "power2.out"
          });
        }
      });

      img.addEventListener('mouseleave', () => {
        if (window.gsap) {
          gsap.to(img, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
          });
        }
      });
    });
  }

  // Remove the reset animation entirely for better performance
  // Keep things simple - let CSS handle the initial state
});

// Garden slider functionality
document.addEventListener('DOMContentLoaded', function () {
  // Slides data
  const slides = [
    {
      left: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      right: "https://images.unsplash.com/photo-1597639353852-7f701b604c39",
      title: "Private Residential Gardens",
      desc: "Green spaces designed for individual homes, offering privacy, beauty, and a personal connection with nature."
    },
    {
      left: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516",
      right: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      title: "Urban Landscape Design",
      desc: "Modern landscaping crafted for city environments, blending aesthetics with functional space usage."
    },
    {
      left: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      right: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      title: "Public Parks & Recreational Spaces",
      desc: "Large outdoor areas designed for communities, focusing on comfort, accessibility, and natural beauty."
    },
    {
      left: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      right: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      title: "Botanical Garden Design",
      desc: "Scientific and aesthetic arrangements of plant collections for education, conservation, and enjoyment."
    }
  ];

  let currentSlide = 0;
  const totalSlides = slides.length;
  let isAnimating = false;
  let dragStartX = 0;
  let isDragging = false;

  // DOM elements
  const leftImg = document.getElementById('sliderLeftImg');
  const rightImg = document.getElementById('sliderRightImg');
  const slideTitle = document.getElementById('slideTitle');
  const slideDesc = document.getElementById('slideDesc');
  const slideNumber = document.getElementById('slideNumber');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const sliderWrapper = document.querySelector('.garden-slider-wrapper');

  // Preload images
  function preloadImages() {
    slides.forEach(slide => {
      const img1 = new Image();
      img1.src = slide.left;
      const img2 = new Image();
      img2.src = slide.right;
    });
  }

  // Smooth slide transition
  function updateSlide(direction = 'next') {
    if (isAnimating) return;
    isAnimating = true;

    const slide = slides[currentSlide];
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        isAnimating = false;
      }
    });

    // Fade out current content
    tl.to([leftImg, rightImg, slideTitle, slideDesc, slideNumber], {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    })
      // Update content
      .call(() => {
        leftImg.src = slide.left;
        rightImg.src = slide.right;
        slideTitle.textContent = slide.title;
        slideDesc.textContent = slide.desc;
        slideNumber.textContent = (currentSlide + 1).toString().padStart(2, '0');
      })
      // Reset for smooth entrance
      .set([leftImg, rightImg], {
        opacity: 0,
        scale: 1
      })
      // Fade in new content
      .to([leftImg, rightImg], {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1
      })
      .to([slideTitle, slideDesc, slideNumber], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.05
      }, "-=0.3");
  }

  // Navigation functions
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide('next');
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide('prev');
  }

  // Initialize drag functionality
  function initDrag() {
    // Mouse drag
    sliderWrapper.addEventListener('mousedown', startDrag);
    sliderWrapper.addEventListener('touchstart', startDragTouch, { passive: false });

    function startDrag(e) {
      isDragging = true;
      dragStartX = e.clientX;
      sliderWrapper.style.cursor = 'grabbing';

      const onMouseMove = (e) => {
        if (!isDragging) return;
        handleDrag(e.clientX);
      };

      const onMouseUp = (e) => {
        if (!isDragging) return;
        endDrag(e.clientX);
        sliderWrapper.style.cursor = 'grab';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    function startDragTouch(e) {
      if (e.touches.length !== 1) return;
      isDragging = true;
      dragStartX = e.touches[0].clientX;
      e.preventDefault();

      const onTouchMove = (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        handleDrag(e.touches[0].clientX);
        e.preventDefault();
      };

      const onTouchEnd = (e) => {
        if (!isDragging) return;
        if (e.changedTouches.length === 1) {
          endDrag(e.changedTouches[0].clientX);
        }
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
      };

      document.addEventListener('touchmove', onTouchMove, { passive: false });
      document.addEventListener('touchend', onTouchEnd);
    }

    function handleDrag(currentX) {
      const deltaX = currentX - dragStartX;
      const dragPercent = Math.min(Math.abs(deltaX) / 150, 1);
      const opacity = 1 - dragPercent * 0.3;

      // Apply subtle drag feedback
      gsap.to([leftImg, rightImg], {
        x: deltaX * 0.15,
        opacity: opacity,
        duration: 0.1,
        ease: "none"
      });
    }

    function endDrag(endX) {
      isDragging = false;
      const deltaX = endX - dragStartX;
      const threshold = 80;

      // Reset position
      gsap.to([leftImg, rightImg], {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });

      // Determine if slide should change
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    }
  }

  // Initialize entrance animations
  function initEntranceAnimations() {
    const tl = gsap.timeline();

    tl
      .to('.garden-header', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to('.garden-divider', {
        scaleX: 1,
        duration: 1,
        ease: "power2.out"
      }, '-=0.5')
      .to('.garden-img-left', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out"
      }, '-=0.4')
      .to('.garden-img-right', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out"
      }, '-=0.8')
      .to('.garden-content-center', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out"
      }, '-=0.6')
      .to('.slider-controls', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, '-=0.5')
      .to('.garden-title', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, '-=0.4')
      .to('.garden-description', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, '-=0.3');
  }

  // Initialize button hover effects
  function initButtonEffects() {
    const buttons = [prevBtn, nextBtn];

    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }

  // Initialize keyboard navigation
  function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      if (isAnimating) return;

      switch (e.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
      }
    });
  }

  // Initialize everything
  function init() {
    preloadImages();
    initEntranceAnimations();
    initDrag();
    initButtonEffects();
    initKeyboardNav();

    // Button event listeners
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isAnimating) prevSlide();
    });

    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isAnimating) nextSlide();
    });
  }

  // Start initialization
  init();
});

// Animation for word-by-word reveal (similar to your site)
document.addEventListener('DOMContentLoaded', function () {
  // Animate header
  const header = document.querySelector('.process-header-light');
  if (header) {
    header.classList.add('visible');
  }

  // Animate step rows on scroll
  const stepRows = document.querySelectorAll('.step-row-light');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  stepRows.forEach(row => {
    observer.observe(row);
  });

  // Word-by-word animation for heading
  const heading = document.querySelector('.process-heading-light');
  if (heading) {
    const words = heading.querySelectorAll('.word-light');
    words.forEach((word, index) => {
      setTimeout(() => {
        word.classList.add('revealed');
      }, index * 150);
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  // Animate header
  const header = document.querySelector('.brands-header-light');
  if (header) {
    header.classList.add('visible');
  }

  // Word-by-word animation for heading
  const heading = document.querySelector('.brands-heading-light');
  if (heading) {
    const words = heading.querySelectorAll('.word-brand');
    words.forEach((word, index) => {
      setTimeout(() => {
        word.classList.add('revealed');
      }, index * 150);
    });
  }

  // Animate brand cards on scroll
  const brandCards = document.querySelectorAll('.brand-card-light');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  brandCards.forEach(card => {
    observer.observe(card);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const footerSection = document.querySelector('.footer-section');

  // Function to handle scroll effect
  function handleScrollEffect() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const footerOffset = footerSection.offsetTop;
    const footerHeight = footerSection.offsetHeight;

    // Calculate when footer enters viewport (20% from top)
    const footerStart = footerOffset - windowHeight * 0.8;

    if (scrollPosition > footerStart) {
      // Calculate progress (0 to 1)
      const progress = Math.min((scrollPosition - footerStart) / (footerHeight * 0.5), 1);

      // Apply zoom out effect based on scroll
      const zoomImage = document.querySelector('.zoom-image');
      if (zoomImage) {
        // Zoom from 1.3 to 1 based on scroll progress
        const zoomLevel = 1.3 - (progress * 0.3);
        zoomImage.style.transform = `scale(${zoomLevel})`;

        // Add scrolled class for fade-in effects
        if (progress > 0.3 && !footerSection.classList.contains('scrolled')) {
          footerSection.classList.add('scrolled');
        }
      }
    } else {
      // Reset if scrolled above footer
      const zoomImage = document.querySelector('.zoom-image');
      if (zoomImage) {
        zoomImage.style.transform = 'scale(1.3)';
      }
      footerSection.classList.remove('scrolled');
    }
  }

  // Initial check
  handleScrollEffect();

  // Listen for scroll events
  window.addEventListener('scroll', handleScrollEffect);
  window.addEventListener('resize', handleScrollEffect);

  // WhatsApp Button Functionality
  const whatsappButton = document.getElementById('whatsappButton');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', function () {
      const phoneNumber = '+971505032497';
      const message = 'Hello Graps Tech, I would like to inquire about your maintenance services in UAE.';
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, '_blank');
    });

    whatsappButton.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-2px)';
    });

    whatsappButton.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  }

  // Navigation underline animations
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
      const underline = this.querySelector('.nav-underline');
      if (underline) {
        underline.style.transform = 'scaleX(1)';
        underline.style.transformOrigin = 'left';
      }
    });

    link.addEventListener('mouseleave', function () {
      const underline = this.querySelector('.nav-underline');
      if (underline && !this.classList.contains('active')) {
        underline.style.transform = 'scaleX(0)';
        underline.style.transformOrigin = 'right';
      }
    });
  });

  // Instagram link animations
  const instaLinks = document.querySelectorAll('.instagram-link');
  instaLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
      const underline = this.querySelector('.nav-underline');
      if (underline) {
        underline.style.transform = 'scaleX(1)';
        underline.style.transformOrigin = 'left';
      }
    });

    link.addEventListener('mouseleave', function () {
      const underline = this.querySelector('.nav-underline');
      if (underline) {
        underline.style.transform = 'scaleX(0)';
        underline.style.transformOrigin = 'right';
      }
    });
  });

  // Smooth scrolling for navigation links
  const navAnchors = document.querySelectorAll('a[href^="#"]');
  navAnchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Trigger scroll effect after a short delay to ensure DOM is ready
  setTimeout(handleScrollEffect, 900);
});

