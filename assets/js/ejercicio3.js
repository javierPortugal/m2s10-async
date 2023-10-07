console.log("Entro ejercicio 3.js");


const miPrimeraPromesa = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        const exito = false;

        if (exito){
            resolve("La promesa finalizo correctamente");
        }else{
            reject("La promesa se rechazo o no se cumplio");
        }

    }, 10000);
});

// Manejar promesas

miPrimeraPromesa
.then((resultado)=>{
    console.log(resultado);
    console.log("este consolelog es asincrono y saldra al termino de la promesa satisfactoria");
})
.catch((error)=>{

    console.log("Entro al catch");
    console.log(error);
})

.finally(()=>{
    console.log("entro a finally");
    loading.style.display = "none";
});

console.log("este console log es sincrono");








