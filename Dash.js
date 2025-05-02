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

// Added code to create overlay with Google search iframe
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

const searchBox = document.createElement('div');
searchBox.className = 'search-box';
searchBox.style.backgroundColor = 'white';
searchBox.style.padding = '20px';
searchBox.style.borderRadius = '5px';
searchBox.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';


const iframe = document.createElement('iframe');
iframe.src = 'https://www.google.com/search?igu=1';
iframe.width = '800';
iframe.height = '600';
iframe.style.border = 'none';

searchBox.appendChild(iframe);
overlay.appendChild(searchBox);
document.body.appendChild(overlay);