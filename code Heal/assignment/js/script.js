  function closePopup() {
     document.getElementById('emailPopup').style.display = 'none';
   }


async function includeHTML() {
  const elements = document.querySelectorAll('[rending]');
  for (const el of elements) {
    const file = el.getAttribute('rending');
    try {
      const response = await fetch(file);
      if (response.ok) {
        el.innerHTML = await response.text();
      } else {
        el.innerHTML = "Page not found.";
      }
      el.removeAttribute("rending");
    } catch (err) {
      el.innerHTML = "Error loading content.";
    }
  }
}
document.addEventListener("DOMContentLoaded", includeHTML);

   function toggleMobileMenu() {
      const menu = document.getElementById("mobileMenu");
      menu.classList.toggle("show");
    }












    let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {slideIndex = 0} // Loop to first slide
  if (n < 0) {slideIndex = slides.length - 1} // Loop to last slide

  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
}

// Optional: Auto-slide
// setInterval(() => {
//   plusSlides(1);
// }, 5000); // Change slide every 5 seconds