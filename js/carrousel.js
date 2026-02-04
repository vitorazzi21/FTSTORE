//carousel é a maquina que faz mexer//
//cards_camisas é a pista//
//camisas_cards são os produtos//


document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const track = wrapper.querySelector('.cards_camisas','.nome_camisas, .btn-instagram');
  const rightBtn = wrapper.previousElementSibling.querySelector('.arrow.right');
  const leftBtn  = wrapper.previousElementSibling.querySelector('.arrow.left');

  let position = 0;

  const cardWidth = 370; // 300 + 70
  const visibleCards = 4;
  const maxScroll = track.children.length - visibleCards;

  rightBtn.addEventListener('click', () => {
    if (position < maxScroll) {
      position++;
      track.style.transform = `translateX(-${position * cardWidth}px)`;
    }
  });

  leftBtn.addEventListener('click', () => {
    if (position > 0) {
      position--;
      track.style.transform = `translateX(-${position * cardWidth}px)`;
    }
  });
});

const imagens = document.querySelectorAll(".zoom-img");
const modal = document.getElementById("modalZoom");
const modalImg = document.getElementById("imgModal");
const close = document.querySelector(".close");
const zoomIn = document.getElementById("zoomIn");
const zoomOut = document.getElementById("zoomOut");

let scale = 1;
let posX = 0;
let posY = 0;
let isDragging = false;
let startX, startY;

function updateTransform() {
  modalImg.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
}

imagens.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    scale = 1;
    posX = 0;
    posY = 0;
    updateTransform();
  });
});

zoomIn.addEventListener("click", () => {
  scale += 0.2;
  updateTransform();
});

zoomOut.addEventListener("click", () => {
  if (scale > 0.6) {
    scale -= 0.2;
    updateTransform();
  }
});

modalImg.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - posX;
  startY = e.clientY - posY;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  posX = e.clientX - startX;
  posY = e.clientY - startY;
  updateTransform();
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});