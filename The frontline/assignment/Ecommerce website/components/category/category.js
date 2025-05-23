const categories = [
  {
    title: "Body care",
    items: "9Items",
    img: "category-1.jpg"
  },
  {
    title: "Face cream",
    items: "8Items",
    img: "category-2.jpg"
  },
  {
    title: "Best Seller",
    items: "12Items",
    img: "category-3.jpg"
  },
  {
    title: "Skin care",
    items: "9Items",
    img: "insta-4.jpg"
  }
];

const container = document.getElementById("category-container");

categories.forEach(({ title, items, img }) => {
  const card = document.createElement("div");
  card.className = "category-card";
  card.innerHTML = `
    <img src="${img}" alt="${title}" />
    <div class="info">
      <h3>${title}</h3>
      <p>${items}</p>
    </div>
  `;
  container.appendChild(card);
});


//GALLARY//
const gallerySection = document.getElementById("imageGallery");

const images = [
  {
    src: "banner-2.jpg",
    alt: "Product 2",
    link: "https://example.com/product2",
    label: "What's New"
  },
  {
    src: "banner-3.jpg",
    alt: "Product 3",
    link: "https://example.com/product3",
    label: "Tips and Trends"
  }
];

images.forEach((item) => {
  const card = document.createElement("div");
  card.className = "image-card";

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;

  const label = document.createElement("div");
  label.className = "label";
  label.textContent = item.label;

  const link = document.createElement("a");
  link.href = item.link;
  link.className = "shop-button";
  link.textContent = "Shop Now →";

  card.appendChild(img);
  card.appendChild(label);
  card.appendChild(link);
  gallerySection.appendChild(card);
});





