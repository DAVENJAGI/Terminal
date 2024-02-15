function showEnterLoginInfo() {
  const showEnterUserDataDiv = document.getElementById('enterUserData');
  if (showEnterUserDataDiv.style.display === 'none') {
    showEnterUserDataDiv.style.display = 'block'; // Show the element
  } else {
    showEnterUserDataDiv.style.display = 'none'; // Hide the element
  }
}
window.onload = showEnterLoginInfo;
showAbout()

function showAbout() {
  const dropdownButton = document.getElementById("dropdownButton");
  const showAbout = document.getElementById('bottom');
  if (showAbout.style.display === 'none') {
    showAbout.style.display = 'flex';
  } else {
    showAbout.style.display = 'none';
  }
  showAbout.style.display === 'flex' ? 'rotate(180deg)' : 'none';
}
window.onload = showAbout();