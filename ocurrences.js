function conteoOcurr (string1, string2) { // Función que contiene 2 pararmetros 
    let count = 0; //Inicializamos el contador en 0
    let pos = string2.toLowerCase().indexOf(string1.toLowerCase());
    while (pos !== -1) {
        count++;
        pos = string2.toLowerCase().indexOf(string1.toLowerCase(), pos + 1);
    }
    return count;
}

let varString1 = "hola";
let varString2 = "gsdt35sHoLa53t3g72bsh730laxvwhola777ho1a27hsr36sholajjdju";

let resultado = conteoOcurr(varString1, varString2);
console.log(resultado);
