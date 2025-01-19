// Select elements
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

// Function to toggle the sidebar
function toggleSidebar() {
    sidebar.classList.toggle('open');
}

// Event listener for the hamburger icon
sidebar.addEventListener('click', toggleSidebar);

// Close the sidebar automatically on window resize (e.g., to desktop mode)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
    }
});
