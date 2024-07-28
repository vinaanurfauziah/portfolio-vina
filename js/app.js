// zoom gambar profile
document.addEventListener('DOMContentLoaded', function () {
  const zoomImage = document.getElementById('zoomImage');

  zoomImage.addEventListener('mouseover', () => {
    zoomImage.style.transform = 'scale(1.2)'; 
  });

  zoomImage.addEventListener('mouseout', () => {
    zoomImage.style.transform = 'scale(1)';
  });
});

// menampilkan dan menyembunyikan pop-up
document.getElementById('profileButton').addEventListener('click', openPopup);

function openPopup() {
  document.getElementById('profilePopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('profilePopup').style.display = 'none';
}

// menutup pop-up ketika area luar pop-up diklik
document
  .getElementById('profilePopup')
  .addEventListener('click', function (event) {
    if (event.target === this) {
      closePopup();
    }
  });

// menutup pop-up ketika tombol Escape ditekan
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closePopup();
  }
});

// efek animasi bergerak pada card services & projects
const cards = document.querySelectorAll('.card');

function handleCardHover(card) {
  card.style.transform = 'translateY(-10px)';
  card.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.15)';
  card.querySelector('h3').style.transform = 'translateY(-5px)';
  card.querySelector('p').style.transform = 'translateY(-5px)';
}

function handleCardHoverOut(card) {
  card.style.transform = 'none';
  card.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.1)';
  card.querySelector('h3').style.transform = 'none';
  card.querySelector('p').style.transform = 'none';
}

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    handleCardHover(card);
  });

  card.addEventListener('mouseout', () => {
    handleCardHoverOut(card);
  });

  // For touch devices
  card.addEventListener('touchstart', (event) => {
    event.preventDefault(); 
    handleCardHover(card);
  });

  card.addEventListener('touchend', (event) => {
    event.preventDefault(); 
    handleCardHoverOut(card);
  });
});