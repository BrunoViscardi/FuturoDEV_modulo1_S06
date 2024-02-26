alert("Olá, usuário!")

let formulario = document.getElementById('forms')


forms.addEventListener("submit", function (event) {

    let nome = document.getElementById("nome").value;
    let alterar_aqui = document.getElementById("Avancar_fulano");
    alterar_aqui.innerText = nome + ", avance";
    event.preventDefault();

})