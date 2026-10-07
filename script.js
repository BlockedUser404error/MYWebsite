// Simple greeting when page loads
console.log('Website loaded successfully! 🚀');

// Add click handler for CTA button
document.addEventListener('DOMContentLoaded', () => {
  const ctaBtn = document.querySelector('.cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      alert('Welcome! Thanks for visiting! 🎉');
    });
  }
});
