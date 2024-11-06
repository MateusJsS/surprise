document.addEventListener("DOMContentLoaded", function() {
    const surpriseLink = document.getElementById("surprise-link");
    
    // Mostrar o botão após 3 segundos
    setTimeout(() => {
        surpriseLink.style.display = "inline-block";  // Torna o botão visível
        surpriseLink.style.animation = "slideUp 0.5s ease-out";  // Animação suave para o botão
    }, 3000);
});
