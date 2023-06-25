

const encriptarTexto = function(texto){
    if(texto.length > 0){ textoEncriptado = texto
        .replace(/e/g,"enter")
        .replace(/i/g,"imes")
        .replace(/a/g,"ai")
        .replace(/o/g,"ober")
        .replace(/u/g,"ufat");
        let h3 = document.querySelector(".h3");
        h3.textContent = textoEncriptado;
        conTexto.style.display = "flex";
        sinTexto.style.display = "none";
    }
    else{
        sinTexto.style.display = "flex";
        conTexto.style.display = "none";
    }
   
        

}

const desencriptarTexto = function(texto){
    if(texto.length > 0){
        textoEncriptado = texto
        .replace(/enter/g,"e")
        .replace(/imes/g,"i")
        .replace(/ai/g,"a")
        .replace(/ober/g,"o")
        .replace(/ufat/g, "u");
        let h3 = document.querySelector(".h3");
        h3.textContent = textoEncriptado;
    }
    else{
        sinTexto.style.display = "flex";
        conTexto.style.display = "none";
    }
}
let sinTexto = document.querySelector(".div__texto--encriptado");
let conTexto = document.querySelector(".div__texto--resultado");


let input = document.querySelector(".text__area");
let texto = input.value;

input.addEventListener("input", function(){
    texto = input.value;
})

let boton = document.querySelector(".encriptar");
boton.addEventListener("click", function(){
    encriptarTexto(texto);
});


let botonDos = document.querySelector(".desencriptar");
botonDos.addEventListener("click", function(){
    desencriptarTexto(texto);
})

///// BOTON DE COPIAR ////////////////////////
///////////////////////////////////////////



//////////////////////////////////////////////
////////////////////////////////////////////







