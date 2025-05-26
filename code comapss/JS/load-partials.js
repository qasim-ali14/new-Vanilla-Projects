// load-partials.js
function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Could not load ${file}`);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error(error));
}

window.addEventListener("DOMContentLoaded", () => {
  loadHTML("navbar", "navbar.html");
  loadHTML("footer", "footer.html");
});
