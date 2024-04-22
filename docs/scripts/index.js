var botao1 = document.getElementById("botao1")
var botao2 = document.getElementById("botao2")

botao1.addEventListener("click", function() {
    window.open('secao1.html', '_self');
});

botao2.addEventListener("click", function() {
    window.open("rascunho.html?parametro=1", "_self")
})