// main.js

// Base URL for all requests
const BASE_URL = window.location.origin;

// Load a single HTML file as string
async function loadHTML(path) {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const res = await fetch(`${BASE_URL}${normalizedPath}`);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return await res.text();
}

// modify injectComponents to render component inside component
async function injectComponents(container) {
  const componentHolders = container.querySelectorAll('[data-component]');

  for (const holder of componentHolders) {
    const path = holder.getAttribute('data-component');
    try {
      const html = await loadHTML(path);
      const tempWrapper = document.createElement('div');
      tempWrapper.innerHTML = html;

      // Recursively inject nested components
      await injectComponents(tempWrapper);

      holder.replaceWith(...tempWrapper.childNodes);
    } catch (err) {
      console.error(`Error loading component ${path}:`, err);
      holder.outerHTML = `<div class="error">Failed to load component: ${path}</div>`;
    }
  }
}


// Route configuration
const routes = {
  '/': '/pages/home.html',
  '/about': '/pages/about.html',
  // Add other routes here
};

// Load and render page
async function renderPage(path = '/') {
  const app = document.getElementById('app');
  try {
    // Get the actual file path from our route config
    const pagePath = routes[path] || '/pages/404.html';
    const pageHTML = await loadHTML(pagePath);
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = pageHTML;

    await injectComponents(tempDiv);
    app.innerHTML = tempDiv.innerHTML;

    // Update active link in navbar
    document.querySelectorAll('[data-link]').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === path);
    });
  } catch (err) {
    app.innerHTML = `<div class="error">Error: ${err.message}</div>`;
  }
}

// Handle navigation
function setupNavigation() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (link) {
      e.preventDefault();
      const path = link.getAttribute('href');
      window.history.pushState({}, '', path);
      renderPage(path);
    }
  });

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    renderPage(window.location.pathname);
  });
}

// Initialize the app
function init() {
  setupNavigation();
  renderPage(window.location.pathname);
}

// Start the application
init();