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

const images = Array.from({ length: 9 }, (_, i) => `images/cougar_connect/cc_${i + 1}.JPG`);

let currentIndex = 0;

const modal = document.getElementById("gallery-modal");
const modalImg = document.getElementById("gallery-image");
const closeBtn = document.querySelector(".gallery-close");
const leftArrow = document.querySelector(".gallery-arrow.left");
const rightArrow = document.querySelector(".gallery-arrow.right");

document.querySelector(".gallery-trigger").addEventListener("click", () => {
  currentIndex = 0;
  openGallery();
});

function openGallery() {
  modal.classList.remove("hidden");
  modalImg.src = images[currentIndex];
}

function closeGallery() {
  modal.classList.add("hidden");
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex];
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex];
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