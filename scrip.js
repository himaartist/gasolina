let etanol, gasolina;

function calcular(){
    etanol = parseFloat(formularioFlex.valoretanol.value.replace(",","."));
    gasolina = parseFloat(formularioFlex.valorgasolina.value.replace(",","."));

    if(etanol <(0.75*gasolina)){
        document.getElementById("status").src = "alcool.png";
        document.body.style.backgroundColor='lightcyan';
    }
    else{
        document.getElementById("status").src = "gasolina.png";
        document.body.style.backgroundColor='lightcoral';
    }
}

function limpar(){
    document.getElementById("status").src = "neutro.png";
    document.body.style.backgroundColor='#84cc83';
}