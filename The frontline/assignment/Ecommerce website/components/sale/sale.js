const flashSale = document.getElementById('flash-sale');

const messages = [
  'Flash Sale Weekend. Up to <span style="font-weight: bold;">50%</span> off <a href="#">Learn more</a>',
  'Flash Sale Weekend. Up to <span style="font-weight: bold;">70%</span> off <a href="#">Learn more</a>'
];

let index = 0;

function showNextMessage() {
  // Remove previous message
  flashSale.innerHTML = '';

  // Create new slide element
  const div = document.createElement('div');
  div.classList.add('flash-slide');
  div.innerHTML = messages[index];
  flashSale.appendChild(div);

  // Switch to next message
  index = (index + 1) % messages.length;
}

// Start immediately and repeat every 3 seconds
showNextMessage();
setInterval(showNextMessage, 3000);