document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que a página recarregue

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");
    let aumente = document.getElementById("aumente");

    if (nome.trim() === "" || idade.trim() === "") {
        resultado.innerHTML = "Por favor, preencha todos os campos!";
        aumente.innerHTML = "";
        return;
    }

    resultado.innerHTML = `Com base nas informações passadas, ${nome}. Você tem aproximadamente 1 semana de vida.`;

    aumente.innerHTML = `Tente sua sorte de aumentar mais 20 anos de vida!
        <a href="ivone.html">Clique aqui</a> para tentar sua sorte`;
});