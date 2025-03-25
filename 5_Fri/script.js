const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

// Set initial theme and button text
document.body.classList.add(currentTheme + '-mode');
toggleBtn.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

toggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = 'Dark Mode';
  } else {
    document.body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = 'Light Mode';
  }
});