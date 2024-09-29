// Mock data for job listings
let jobListings = [
    { title: 'Front-end Developer', company: 'Awesome Company Inc.', location: 'New York, NY', description: 'Brief description of the job...' },
    { title: 'Back-end Developer', company: 'Tech Corp.', location: 'San Francisco, CA', description: 'Brief description of the job...' },
    { title: 'Full Stack Developer', company: 'Web Solutions', location: 'Remote', description: 'Brief description of the job...' },
    // Add more job listings as needed
];

// Elements
const jobListingsContainer = document.getElementById('job-listings');
const searchInput = document.getElementById('search-input');
const locationFilter = document.getElementById('location-filter');
const searchButton = document.getElementById('search-button');
const homeLink = document.getElementById('home-link');
const postJobLink = document.getElementById('post-job-link');
const loginLink = document.getElementById('login-link');
const logoutLink = document.getElementById('logout-link');
const loginModal = document.getElementById('login-modal');
const postJobModal = document.getElementById('post-job-modal');
const closeLoginModal = document.getElementById('close-login-modal');
const closePostJobModal = document.getElementById('close-post-job-modal');
const loginForm = document.getElementById('login-form');
const postJobForm = document.getElementById('post-job-form');

// Functions
function displayJobListings(jobs) {
    jobListingsContainer.innerHTML = '';
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
            <p>${job.description}</p>
            <a href="#" class="details-link">View Details</a>
        `;
        jobListingsContainer.appendChild(jobCard);
    });
}

function filterJobs() {
    const searchText = searchInput.value.toLowerCase();
    const location = locationFilter.value;
    const filteredJobs = jobListings.filter(job => {
        const matchesText = job.title.toLowerCase().includes(searchText) || job.company.toLowerCase().includes(searchText);
        const matchesLocation = location === 'all' || job.location.toLowerCase().includes(location);
        return matchesText && matchesLocation;
    });
    displayJobListings(filteredJobs);
}

function toggleModal(modal, show) {
    modal.style.display = show ? 'block' : 'none';
}

function handleLogin(event) {
    event.preventDefault();
    // Simulate login process
    alert('Logged in successfully!');
    toggleModal(loginModal, false);
    loginLink.style.display = 'none';
    logoutLink.style.display = 'block';
}

function handleLogout() {
    alert('Logged out successfully!');
    loginLink.style.display = 'block';
    logoutLink.style.display = 'none';
}

function handlePostJob(event) {
    event.preventDefault();
    const newJob = {
        title: document.getElementById('job-title').value,
        company: document.getElementById('job-company').value,
        location: document.getElementById('job-location').value,
        description: document.getElementById('job-description').value,
    };
    jobListings.push(newJob);
    displayJobListings(jobListings);
    toggleModal(postJobModal, false);
}

// Event Listeners
searchButton.addEventListener('click', filterJobs);
homeLink.addEventListener('click', () => displayJobListings(jobListings));
postJobLink.addEventListener('click', () => toggleModal(postJobModal, true));
loginLink.addEventListener('click', () => toggleModal(loginModal, true));
logoutLink.addEventListener('click', handleLogout);
closeLoginModal.addEventListener('click', () => toggleModal(loginModal, false));
closePostJobModal.addEventListener('click', () => toggleModal(postJobModal, false));
loginForm.addEventListener('submit', handleLogin);
postJobForm.addEventListener('submit', handlePostJob);

// Initial display
displayJobListings(jobListings);
