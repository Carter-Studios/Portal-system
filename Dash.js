function randomValues() {
  anime({
    targets: '.square, .circle, .triangle',
    translateX: function() {
      return anime.random(-500, 500);
    },
    translateY: function() {
      return anime.random(-300, 300);
    },
    rotate: function() {
      return anime.random(0, 360);
    },
    scale: function() {
      return anime.random(.2, 2);
    },
    duration: 1000,
    easing: 'easeInOutQuad',
    complete: randomValues,
  });
}

randomValues();

// Get activate button
const activateButton = document.querySelector('button');

activateButton.addEventListener('click', () => {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '9999';

  const searchBox = document.createElement('div');
  searchBox.className = 'search-box';

  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '×';
  closeButton.onclick = () => overlay.remove();

  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.google.com/search?igu=1';
  iframe.className = 'search-frame';

  // Add close functionality when clicking outside the search box
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });

  searchBox.appendChild(iframe);
  overlay.appendChild(searchBox);
  document.body.appendChild(overlay);
});