const btn = document.getElementById("btn"); 

// Verificação para garantir que o botão existe
if (btn) {
    btn.addEventListener("click", () => {
        alert("Você clicou no botão!");
    });
}