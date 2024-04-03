
  function openFullScreen(img) {
    document.getElementById('fullScreenImg').src = img.src;
    document.getElementById('overlay').style.display = 'flex';
  }
  
  function closeFullScreen() {
    document.getElementById('overlay').style.display = 'none';
  }
  