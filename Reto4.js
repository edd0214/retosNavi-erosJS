/*
En el taller de Santa 🎅,
algunos mensajes navideños han sido escritos de manera peculiar: 
las letras dentro de los paréntesis deben ser leídas al revés
Santa necesita que estos mensajes estén correctamente formateados.
Tu tarea es escribir una función que tome una cadena de texto
y revierta los caracteres dentro de cada par de paréntesis, 
eliminando los paréntesis en el mensaje final.
Eso sí, ten en cuenta que pueden existir paréntesis anidados, 
por lo que debes invertir los caracteres en el orden correcto.
*/

function decode(message) {
    let inicio;
    let end;
       
    while (inicio !== -1 || end !== -1) {
       inicio= message.lastIndexOf("(");
       end= message.indexOf(")", inicio);
       
       const stringInvertido = message.substring(inicio, end+1);
       
       const stringRevertido = stringInvertido.split("").slice(1,-1).reverse().join("") ;
               
       message = message.replace(stringInvertido, stringRevertido);
        
    }
    return message;
}

const a = decode('hola (odnum)')
console.log(a)


const b = decode('(olleh) (dlrow)!')
console.log(b)

const c = decode('sa(u(cla)atn)s')
console.log(c)





function decode(message) {
    let inicio;
    let end;
       
    while (inicio !== -1 || end !== -1) {

        inicio = message.lastIndexOf("(");
        end =  message.indexOf(")", inicio);

        const stringInvertido = message.substring(inicio, end+1);
        
        const stringRevertido = stringInvertido.split("").slice(1,-1).reverse().join("") ;
                
        message = message.replace(stringInvertido, stringRevertido);        
    }
    return message;
}