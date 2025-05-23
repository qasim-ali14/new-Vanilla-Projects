const featuredSection = document.getElementById("featuredProducts");

const products = [
  { img: "pic2.jpg" },
  { img: "pic3.jpg" },
  { img: "pic4.jpg" },
  { img: "pic2.jpg" },
  { img: "pic5.jpg" },
  { img: "pic6.jpg" },
  { img: "pic3.jpg" }
];

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.img}" alt="Soothing Body Lotion" />
      <span class="sale-tag">-3% Sale</span>
      <div class="top-icons">
        <span class="icon wishlist" title="Add to Wishlist">♡</span>
        <span class="icon cart" title="Add to Compare">🛒</span>
      </div>
      <div class="quick-add">Quick Add</div>
    </div>
    <div class="product-details">
      <h3>Soothing Body Lotion</h3>
      <div class="price">
        <del>Rs 53,000.00</del>
        <span class="discounted">Rs 51,600.00 PKR</span>
      </div>
      <div class="colors">
        <span class="color blue" title="Blue"></span>
        <span class="color green" title="Green"></span>
        <span class="color black" title="Black"></span>
      </div>
    </div>
  `;

  // Redirect to cart page on cart icon click
  card.querySelector(".cart").addEventListener("click", () => {
    window.location.href = "cart.html"; // You can change the link here
  });

  // Optional: Show tooltip on wishlist
  card.querySelector(".wishlist").addEventListener("mouseover", () => {
    card.querySelector(".wishlist").title = "Add to Wishlist";
  });

  featuredSection.appendChild(card);
});
