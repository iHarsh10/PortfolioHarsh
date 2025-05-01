// Project data
const projects = [
  {
    id: 1,
    title: "AI Safety Incident",
    description: "A responsive dashboard to view, filter, sort, and generate reports on AI Safety incidents. It offers intuitive data visualization and interaction for efficient incident tracking and analysis.",
    image: "../assets/ai safety.jpg",
    tags: ["React", "Tailwind"],
    category: "web",
    liveLink: "#",
    codeLink: "https://github.com/iHarsh10/AI-Safety-Incident.git"
  },
  {
    id: 2,
    title: "FooDoor",
    description: "A responsive frontend food delivery app that displays a list of food items with filtering options. Users can add items to the cart and proceed to an order page to review and place orders.",
    image: "../assets/FoodDoor.png",
    tags: ["React", "CSS", "Redux"],
    category: "web",
    liveLink: "https://foodoor.netlify.app/",
    codeLink: "https://github.com/iHarsh10/FooDooR.git"
  },
  {
    id: 3,
    title: "Rentify Hotel",
    description: "A hotel renting app built with HTML, CSS, Node.js, Next.js, and MongoDB that lets users browse, filter, and book hotels. It features user authentication, detailed listings, and a booking management system.",
    image: "../assets/Rentify.jpeg",
    tags: ["HTML", "CSS", "JS", "node.js", "next.js", "mongoDB"],
    category: "design",
    liveLink: "#",
    codeLink: "https://github.com/iHarsh10/Rentify-Hotel.git"
  }
];

/**
 * Creates a project card element
 * @param {Object} project - Project data object
 * @returns {HTMLElement} Project card element
 */
function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.dataset.category = project.category;
  
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        <a href="${project.liveLink}" class="project-link" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          Live Demo
        </a>
        <a href="${project.codeLink}" class="project-link" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          View Code
        </a>
      </div>
    </div>
  `;
  
  return card;
}

/**
 * Initializes the projects section
 */
export function initProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  const projectFilters = document.querySelectorAll('.project-filter');
  
  // Populate projects grid with project cards
  projects.forEach(project => {
    const card = createProjectCard(project);
    projectsGrid.appendChild(card);
  });
  
  // Initialize project filtering
  projectFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      // Update active filter
      projectFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      
      const category = filter.dataset.filter;
      const projectCards = document.querySelectorAll('.project-card');
      
      // Apply filtering
      projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}