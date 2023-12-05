function closeFormPopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    document.body.removeChild(popup);
  }
}

export default closeFormPopup;
