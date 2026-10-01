/**
 * Prodesk IT — Landing Page JavaScript
 * Vanilla JS — No frameworks or libraries
 */

(function () {
  'use strict';

  /* ==================================================
     UTILITY: Reduced-motion preference detection
     ================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ==================================================
     THEME TOGGLE (Dark / Light Mode)
     ================================================== */
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('prodesk-theme', theme);
    themeToggle.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }

  // Restore saved theme or respect system preference
  (function initTheme() {
    const saved = localStorage.getItem('prodesk-theme');
    if (saved) {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  })();

  themeToggle.addEventListener('click', function () {
    const current = htmlEl.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  /* ==================================================
     MOBILE HAMBURGER MENU
     ================================================== */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu.querySelectorAll('.navbar__link');

  function closeMenu() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close navigation menu');
    navMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  hamburger.addEventListener('click', function () {
    const isOpen = hamburger.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu when a nav link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && hamburger.classList.contains('active')) {
      closeMenu();
      hamburger.focus();
    }
  });

  /* ==================================================
     SMOOTH SCROLLING
     ================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
      });
    });
  });

  /* ==================================================
     ACTIVE NAV LINK ON SCROLL
     ================================================== */
  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollY = window.pageYOffset;
    const navbarHeight = document.getElementById('navbar').offsetHeight;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - navbarHeight - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  /* ==================================================
     NAVBAR SCROLL EFFECT (add shadow on scroll)
     ================================================== */
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Combined scroll listener
  window.addEventListener('scroll', function () {
    highlightNav();
    handleNavbarScroll();
  }, { passive: true });

  /* ==================================================
     CONTACT FORM VALIDATION
     ================================================== */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  const fields = {
    name: {
      el: document.getElementById('contact-name'),
      error: document.getElementById('error-name'),
      validate: function (val) {
        if (!val.trim()) return 'Please enter your full name.';
        if (val.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      },
    },
    email: {
      el: document.getElementById('contact-email'),
      error: document.getElementById('error-email'),
      validate: function (val) {
        if (!val.trim()) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())) return 'Please enter a valid email address.';
        return '';
      },
    },
    subject: {
      el: document.getElementById('contact-subject'),
      error: document.getElementById('error-subject'),
      validate: function (val) {
        if (!val.trim()) return 'Please enter a subject.';
        return '';
      },
    },
    message: {
      el: document.getElementById('contact-message'),
      error: document.getElementById('error-message'),
      validate: function (val) {
        if (!val.trim()) return 'Please enter your message.';
        if (val.trim().length < 10) return 'Message must be at least 10 characters.';
        return '';
      },
    },
  };

  // Real-time validation on blur
  Object.keys(fields).forEach(function (key) {
    fields[key].el.addEventListener('blur', function () {
      validateField(key);
    });
    // Clear error on input
    fields[key].el.addEventListener('input', function () {
      if (fields[key].error.textContent) {
        validateField(key);
      }
    });
  });

  function validateField(key) {
    var field = fields[key];
    var errorMsg = field.validate(field.el.value);
    field.error.textContent = errorMsg;
    if (errorMsg) {
      field.el.classList.add('invalid');
      field.el.setAttribute('aria-invalid', 'true');
    } else {
      field.el.classList.remove('invalid');
      field.el.removeAttribute('aria-invalid');
    }
    return !errorMsg;
  }

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var allValid = true;

    Object.keys(fields).forEach(function (key) {
      if (!validateField(key)) {
        allValid = false;
      }
    });

    if (allValid) {
      // Simulate submission
      contactForm.style.display = 'none';
      formSuccess.hidden = false;

      // Reset form after 5 seconds
      setTimeout(function () {
        contactForm.reset();
        contactForm.style.display = '';
        formSuccess.hidden = true;
        Object.keys(fields).forEach(function (key) {
          fields[key].error.textContent = '';
          fields[key].el.classList.remove('invalid');
          fields[key].el.removeAttribute('aria-invalid');
        });
      }, 5000);
    } else {
      // Focus first invalid field
      var firstInvalid = Object.keys(fields).find(function (key) {
        return fields[key].error.textContent;
      });
      if (firstInvalid) fields[firstInvalid].el.focus();
    }
  });

  /* ==================================================
     SCROLL-REVEAL ANIMATION (Intersection Observer)
     ================================================== */
  if (!prefersReducedMotion.matches && 'IntersectionObserver' in window) {
    var revealElements = document.querySelectorAll(
      '.section-header, .about__text, .about__stats, .service-card, .feature-item, .cta-section__inner, .contact-form, .contact-info, .hero__content, .hero__image-wrapper'
    );

    revealElements.forEach(function (el) {
      el.classList.add('reveal');
    });

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }
})();
