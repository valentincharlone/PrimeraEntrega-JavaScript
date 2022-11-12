alert("Bienvenido a carnes premiun!");


let vacuno = 'Carne vacuna'
let porcino = 'Carne porcina'
let achura = 'Achura'

let cant = 0;

function showFunction() {
    let respuesta = prompt(`
        Hola cliente, desea continuar y ver que estamos vendiendo?

        - si
        - no
    `);

    while (respuesta === "si" && cant <3) {
        let producto = prompt(`
            Que tipo de producto te gustaria elegir?
            
            A- ${vacuno}
            B- ${porcino}
            C- ${achura}
        `)
        if (producto) {
            switch(producto){
                case 'A':
                    alert(`Elegiste ${vacuno}`);
                    break
                case 'B':
                    alert(`Elegiste ${porcino}`);
                    break
                case 'C':
                    alert(`Elegiste ${achura}`);
                    break
                default:
                    alert(`Opcion incorrecta`)
                    break
            }
            cant++
        } 
        
        else{
            alert('no elegiste nada :(')
        }

        respuesta = prompt(`
        Quieres seguir comprando?
        
        - si
        - no
        `)

        if (respuesta === 'no'){
            alert(`-Fueron un total de ${cant} productos`)
        }
        
        if(cant === 3){
            alert(`
            -Ya hiciste la cantidad maxima de elecciones 
            -Fueron un total de ${cant} productos
            `),

            alert('Gracias por la visita!') 
        }
        
    }
   
    while(respuesta !== 'si'){
        if(respuesta === 'no'){
            alert('Gracias por la visita')
        }
        else {
            alert(`
                -Opcion incorrecta!
                -Alcanzaste a elegir ${cant} productos
            `)
        }
        break
    }
           
}

showFunction();

// if (producto === "A") {
//     alert("elegiste " + vacuno);
// } else if (producto === "B") {
//     alert("elegiste " + porcino);
// } else if (producto === 'C'){
//     alert("elegiste " + achura);
// }else{
// alert('Ese prodcuto no existe!')