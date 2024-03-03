// Dynamic content loading and other interactive features will go here
document.addEventListener('DOMContentLoaded', () => {
  // Example dynamic content loading for Events section
  const eventsSection = document.querySelector('#events .container');
  eventsSection.innerHTML = `
    <h2 class="text-4xl font-bold mb-6 text-yellow-300">Upcoming Events</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-gray-800 p-4 rounded-lg shadow-lg">
        <p class="font-bold">Veterans Meetup</p>
        <p>March 15, 2024 - Community Center</p>
      </div>
      <!-- More events -->
    </div>
  `;

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
