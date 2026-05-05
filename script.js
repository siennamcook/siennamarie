const images = document.querySelectorAll('.gallery-img');

function updateImages() {
  const viewportCenter = window.innerHeight / 2;

  images.forEach((img) => {
    const rect = img.getBoundingClientRect();
    const imageCenter = rect.top + rect.height / 2;
    const distance = Math.abs(viewportCenter - imageCenter);

    if (distance < window.innerHeight * 0.22) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', updateImages);
window.addEventListener('resize', updateImages);
window.addEventListener('load', updateImages);
