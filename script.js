// Smooth scroll (agar future me sections use karoge)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Button click tracking (console me show karega)
function trackClick(name) {
  console.log(name + " clicked");
}

// WhatsApp quick message function (optional use)
function openWhatsApp() {
  const message = "Hi, I want to grow my hotel bookings";
  const url = "https://wa.me/919928728548?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
