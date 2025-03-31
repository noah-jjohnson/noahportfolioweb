// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Modal functionality for project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
      let modalId = this.getAttribute('data-modal');
      let modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });
  
  // Close modals when clicking the close button
  document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
      this.closest('.modal').style.display = 'none';
    });
  });
  
  // Close modal when clicking outside the modal content
  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
  