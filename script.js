const telaLogin = document.getElementByid("login");
const telaFinal = document.getElementByid("final");
const msgErro = document.getElementByid("erro");

telaLogin.onsubmit = function (e) {
    e.preventDefault();

    const usuario = document.getElementByid("usuario").value;
    const senha = document.getElementByid("senha").value;
   
    if (usuario === "aluno" && senha === "1234"){
        telaLogin.classList.add("escondido");
        telaFinal.classList.remove("escondido");
        }else {
            msgErro.textContent = " usuario ou senha incorretas.";
    }
};

document.getElementByid("sair").onclick = function(){
    telaLogin.reset();
    msgErro.textContent"",
    telaFinal.classList.add("escondido");
    telaLogin.classList.remove("escondido");
};