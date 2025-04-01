// JavaScript for Slide Panel Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidePanel = document.getElementById('side-panel');

// Toggle the side panel when the hamburger button is clicked
hamburgerBtn.addEventListener('click', () => {
  sidePanel.classList.toggle('open');
});
