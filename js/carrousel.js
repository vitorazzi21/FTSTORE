//carousel é a maquina que faz mexer//
//cards_camisas é a pista//
//camisas_cards são os produtos//


document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const track = wrapper.querySelector('.cards_camisas');
  const nomeCamisas = wrapper.querySelector('.nome_camisas');
  const btnInstagram = wrapper.querySelector('.btn-instagram');
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