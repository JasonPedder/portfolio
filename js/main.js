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
