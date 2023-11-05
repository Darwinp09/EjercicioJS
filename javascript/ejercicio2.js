//Ejercicio 2, Promedio Estudiantes
function calcularPromedioNotas(estudiantes) {
    const prom = [];
    for (let i = 0; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
        const notas = estudiante.notas;
        const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
        const promedio = sumaNotas / notas.length || 0;
        prom.push({
            nombre: estudiante.nombre,
            promedio: promedio
        });
    }
    return prom;
}

//Datos de prueba
const estudiantes = [{
    nombre: 'Darwin',
    notas: [90, 92, 94, 90]
},
{
    nombre: 'Ed',
    notas: [70, 80, 75, 75]
},
{
    nombre: 'Pin',
    notas: [90, 90, 90, 90]
},
{
    nombre: 'Vale',
    notas: [10, 20, 30, 40]
}];

const promedios = calcularPromedioNotas(estudiantes);
console.log(promedios);