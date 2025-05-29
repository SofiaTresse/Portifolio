document.addEventListener('DOMContentLoaded', function() {
  // Loader
  const loader = document.getElementById('loader');
  
  // Simular carregamento
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 2000);
  
  // Cursor personalizado
  const cursor = document.getElementById('cursor');
  const cursorFollower = document.getElementById('cursorFollower');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 100);
  });
  
  // Efeitos de hover
  const hoverElements = document.querySelectorAll('a, button, .project-card');
  
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorFollower.style.width = '50px';
      cursorFollower.style.height = '50px';
      cursorFollower.style.borderColor = 'var(--secondary)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursorFollower.style.width = '30px';
      cursorFollower.style.height = '30px';
      cursorFollower.style.borderColor = 'var(--primary)';
    });
  });
  
  // Animação de digitação
  const typewriter = document.querySelector('.typewriter');
  const text = typewriter.getAttribute('data-text');
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, Math.random() * 100 + 50);
    } else {
      typewriter.classList.add('finished');
    }
  }
  
  setTimeout(typeWriter, 1500);
  
  // Animação das barras de habilidades
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const animateSkills = () => {
    skillBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = level;
    });
  };
  
  // Observador de interseção para animações
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('skill-progress')) {
          animateSkills();
        }
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.skill-progress, .project-card, .about-image, .contact-form').forEach(el => {
    observer.observe(el);
  });
  
  // Smooth scroll para links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Efeito parallax
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroPattern = document.querySelector('.hero-pattern');
    
    if (heroPattern) {
      heroPattern.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
  });
});