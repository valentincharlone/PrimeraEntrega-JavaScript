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
                    default :
                        alert('no elegiste nada :(')
                }
            }
                cant++
                if(cant === 3){
                    alert(`
                    -Ya hiciste la cantidad maxima de elecciones 
                    -Fueron un total de ${cant} productos
                    `)
                }
            
                respuesta = prompt(`
                Desea seguir elegiendo
                
                - si
                - no
                `)

                alert(`-Fueron un total de ${cant} productos`)
                
            }
            
            if(respuesta === 'no'){
                alert('Gracias por la visita!')
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