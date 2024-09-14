
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
    window.location.href = 'https://forms.gle/aoxZ5Taf2pkjk7fq5';
  }
  function redirectToGoogleForm1() {
    window.location.href ='https://forms.gle/rnajHc2E3UJQfG6M7'; 
  }
  function redirectToGoogleForm2() {
    window.location.href ='https://forms.gle/wCPf8wwyFFToAweM6'; 
  }
  function redirectToGoogleForm3() {
    window.location.href ='https://forms.gle/Ye5LBnN8bmFKoEG69'; 
  }
  function redirectToGoogleForm4() {
    window.location.href ='https://forms.gle/2TG7jDUk2TjuERuZ7'; 
  }
  function redirectToGoogleForm5() {
    window.location.href ='https://forms.gle/bRQQvcufQhKpoTiA6'; 
  }
  function redirectToGoogleForm6() {
    window.location.href ='https://forms.gle/N9vwUCyRGQ5qp4KX6'; 
  }
  
