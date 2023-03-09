var equipamentos = ['fixa', 'argolas', 'paralelas', 'cavalo', 'assimetricas', 'salto', 'trave'];
var num = 0;

function MudarImagem(){
    num += 1;
    if(num == equipamentos.length){
        num = 0;
    }
    document.querySelector("#equipamentos").setAttribute("src",  
    `imagens/${equipamentos[num]}.jpg`);
    document.querySelector("#nomeEquip").textContent = equipamentos[num];
}