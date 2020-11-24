const cards = document.querySelectorAll('.card')

function toggleOpen() {
  this.classList.toggle('open');
}

cards.forEach(card => card.addEventListener('click', toggleOpen));