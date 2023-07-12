function scrollForm(){
    // Obtém a posição alvo de rolagem
var targetPosition = document.getElementById("form").offsetTop;

// Realiza a rolagem suave até a posição alvo
window.scrollTo({
  top: targetPosition,
  behavior: "smooth" // Adiciona um efeito de rolagem suave
});
}