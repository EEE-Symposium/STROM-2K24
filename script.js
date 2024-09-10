
function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');
  }

  function openPopup(popupId) {
    closeAllPopups();
    document.getElementById(popupId).style.display = 'block';
  }

  function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }

  function openRegistrationPopup() {
    closeAllPopups();
    document.getElementById('registration-popup').style.display = 'block';
  }

  function closeRegistrationPopup() {
    document.getElementById('registration-popup').style.display = 'none';
  }

  function redirectToGoogleForm() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdchx4FYwiAtE__U9ZA_Vy2H0XG1Zf8Dzp3Cioa_5fEi-5-kA/viewform?usp=sf_link';
  }