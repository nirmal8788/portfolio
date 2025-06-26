// View full image in modal
function viewImage(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = src;
}

// Close modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Fake form handler (no backend)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent! (This is a front-end-only form.)");
});
