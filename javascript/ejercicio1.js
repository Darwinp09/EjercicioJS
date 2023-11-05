//Ejercicio1, Contar Palabras
//Datos de prueba
const texto = "Hola && como tan muchachos . , ./, ya terminaron el ejercicio?"

function contarPalabras(texto) {
    const textomin = texto.toLowerCase();
    const textosincaracteres = textomin.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ' ');
    const cantidadpalabras = textosincaracteres.split(' ').filter(palabra => palabra !== '');
    return cantidadpalabras.length;
}

console.log("El texto es: ", texto);
console.log("La cantidad de palabras es: ", contarPalabras(texto));