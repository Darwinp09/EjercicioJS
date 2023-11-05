//Ejercicio #3, encontrar duplicados

function encontrarDuplicados(lista) {
  const contador = {};
  const duplicados = [];

  lista.forEach(numero => {
    if (contador[numero] === undefined) {
      contador[numero] = 1;
    } else {
      if (contador[numero] === 1) {
        duplicados.push(numero);
      }
      contador[numero]++;
    }
  });

  return duplicados;
}

//Datos de prueba
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 2];
console.log("La lista de numero es: ", numeros);

const duplicados = encontrarDuplicados(numeros);
console.log("Números duplicados de la lista son:", duplicados);