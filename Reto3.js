/*
En el taller de Santa, 
un elfo travieso ha estado jugando en la cadena de fabricación de regalos,
añadiendo o eliminando un paso no planificado.
Tienes la secuencia original de pasos en la fabricación original 
y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función 
que identifique y devuelva el primer paso extra 
que se ha añadido o eliminado en la cadena de fabricación. 
Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

/*
Evaluar cada carácter del string mediante su índice
y que a su vez evalúe si los valores son iguales.
*/

// function findNaughtyStep(original, modified) {
//     for (let index = 0; (index < original.length || index < modified.length); index++) {
//         if (original[index] !== modified[index]) {
//             return (original.length > modified.length) ? original[index] : modified[index];
//         }        
//     }
//     return '';
//   }

function findNaughtyStep(original, modified) {
    let i=0
    while (i<original.length || i<modified.length) {
        if (original[i] !== modified[i]) {
            return (original.length > modified.length) ? original[i] : modified[i];
        }
    i++
    }
    return '';
}


const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // ''

console.log(findNaughtyStep(original, modified));