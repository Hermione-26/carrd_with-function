// Select the hamburger icon and sidebar elements
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

// Toggle the 'active' class on both the hamburger and sidebar when clicked
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
});
