console.log("Entro index.js");

function saludar(texto, callback){
    console.log("Entro a funcion saludar");
    const textoMayusculas = texto.toUpperCase();
    callback("Hola: " + textoMayusculas);

    console.log(textoMayusculas);

}

function imprimir(parametro){
    console.log(parametro);
}

saludar("javier", imprimir);


//imprimir("imprimir 1");
//imprimir("imprimir 2");
//imprimir("imprimir 3");


