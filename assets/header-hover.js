document.addEventListener('DOMContentLoaded', () => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  
    const menuDetails = document.querySelectorAll('header details');
  
    menuDetails.forEach((details) => {
      let timeout;
  
      details.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        details.setAttribute('open', true);
      });
  
      details.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          details.removeAttribute('open');
        }, 150); // small delay = smoother UX
      });
    });
  });
  