const viewProjectsBtn = document.getElementById('view-projects');
const projectsSection = document.getElementById('projects');

viewProjectsBtn.addEventListener('click', () => {
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

const aboutBtn = document.getElementById('about-me');
const aboutSection = document.getElementById('about');

aboutBtn.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

const ccImages = Array.from({ length: 9 }, (_, i) => `images/cougar_connect/cc_${i + 1}.JPG`);
const cmImages = Array.from({ length: 4 }, (_, i) => `images/cougar_mail/cm_${i + 1}.JPG`);

let currentIndex = 0;
let activeImages = [];

const modal = document.getElementById("gallery-modal");
const modalImg = document.getElementById("gallery-image");
const closeBtn = document.querySelector(".gallery-close");
const leftArrow = document.querySelector(".gallery-arrow.left");
const rightArrow = document.querySelector(".gallery-arrow.right");

document.querySelector(".gallery-trigger-cc").addEventListener("click", () => {
  currentIndex = 0;
  activeImages = ccImages;
  openGallery();
});

document.querySelector(".gallery-trigger-cm").addEventListener("click", () => {
  currentIndex = 0;
  activeImages = cmImages;
  openGallery();
});

function openGallery() {
  modal.classList.remove("hidden");
  modalImg.src = activeImages[currentIndex];
}

function closeGallery() {
  modal.classList.add("hidden");
}

function showNext() {
  if (!activeImages.length) return;
  currentIndex = (currentIndex + 1) % activeImages.length;
  modalImg.src = activeImages[currentIndex];
}

function showPrev() {
  if (!activeImages.length) return;
  currentIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
  modalImg.src = activeImages[currentIndex];
}

closeBtn.onclick = closeGallery;
rightArrow.onclick = showNext;
leftArrow.onclick = showPrev;

document.addEventListener("keydown", e => {
  if (modal.classList.contains("hidden")) return;
  if (e.key === "Escape") closeGallery();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});