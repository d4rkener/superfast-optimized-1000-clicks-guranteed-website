import './style.css';
const video = document.getElementById('video');

window.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    video.classList.add('escVideo');
  }
});
