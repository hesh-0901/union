document.addEventListener("DOMContentLoaded", function () {

  const currentPath = window.location.pathname.toLowerCase();

  const navItems = document.querySelectorAll("#bottomNav .nav-item");

  navItems.forEach(item => {

    const page = item.getAttribute("data-page");

    if (currentPath.includes(page)) {
      item.classList.remove("text-gray-400");
      item.classList.add("text-blue-400");

      // Glow effect
      item.innerHTML += `
        <span class="absolute w-2 h-2 bg-blue-400 rounded-full -bottom-1"></span>
      `;
    }

    // Click animation
    item.addEventListener("click", function () {
      item.classList.add("scale-110");
      setTimeout(() => {
        item.classList.remove("scale-110");
      }, 150);
    });

  });

});
