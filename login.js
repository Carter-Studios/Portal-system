
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

document.getElementById('login').addEventListener('click', async function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('users.txt');
    const data = await response.text();
    const users = data.split('\n').map(line => line.split(':'));
    
    const userMatch = users.find(([u, p]) => u === username && p === password);
    
    if (userMatch) {
      window.location.href = 'dashboard.html';
    } else {
      showError('');
    }
  } catch (error) {
    showError('Error during login');
  }
});

function showError(message) {
  const error = document.createElement('div');
  error.className = 'error-popup';
  error.textContent = message;
  document.body.appendChild(error);
  
  setTimeout(() => {
    error.remove();
  }, 3000);
}
