const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.querySelectorAll('.animate-on-scroll');
      children.forEach((child, i) => {
        child.style.animationDelay = `${i * 0.3}s`; 
        child.classList.add('visible');
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 }); 

document.querySelectorAll('.scroll-section').forEach(section => {
  observer.observe(section);
});
