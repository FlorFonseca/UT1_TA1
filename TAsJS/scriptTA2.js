function removeFromArray ( arreglo, item){
    arreglo=arreglo.filter((element)=>element!==item);
    console.log(arreglo);
}

removeFromArray(["hola","chau","buenas"], "chau");
