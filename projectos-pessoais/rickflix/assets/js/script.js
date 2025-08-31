const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Evento de clique no botão da lupa
searchButton.addEventListener("click", () => {
  if (!searchInput.classList.contains("show")) {
    searchInput.classList.add("show"); // Mostra o input
    searchInput.focus(); // Dá foco ao input
  } else {
    searchInput.classList.remove("show"); // Esconde o input
    searchInput.value = ""; // Limpa o conteúdo
  }
});


/*SECÇAO DO CARROSEL GALLERY*/
function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].offsetWidth; // Largura de uma imagem
  const scrollAmount = itemWidth; // Scroll por uma imagem por vez

  carousel.scrollBy({
    left: direction * scrollAmount, // Rola uma imagem para a esquerda ou direita
    behavior: 'smooth' // Transição suave
  });
}
