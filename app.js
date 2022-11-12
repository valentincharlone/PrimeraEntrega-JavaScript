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

    while (respuesta === "si" && cant <= 2) {
        let producto = prompt(`
            Que tipo de producto te gustaria elegir?

            A- ${vacuno}
            B- ${porcino}
            C- ${achura}
        `)

        if(cant <=2){
            if (producto === "A") {
                alert("elegiste " + vacuno);
            } else if (producto === "B") {
                alert("elegiste " + porcino);
            } else {
                alert("elegiste " + achura);
            }
        }

        cant++

        respuesta = prompt(`
            Desea seguir elegiendo

            - si
            - no
        `)

        if(cant === 3){
            alert('ya hiciste la cantidad maxima de elecciones')
        }
        
    }
    if(respuesta === 'no'){
        alert('Gracias por la visita!')
    }

}

showFunction();

// switch(producto){
//     case 1:
//         alert("elegiste Carne vacuna");
//         break
//     case 2:
//         alert("elegiste Carne porcina");
//         break
//     case 3:
//         alert("elegiste achuras");
//         break
//     default :
//         alert('no elegiste nada :(')
// }