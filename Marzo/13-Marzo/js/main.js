let notas = [];

function calcularPromedio() {
    if (notas.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function mostrarNotas() {
    console.log("Notas actuales:", notas);
    console.log("Promedio del curso:", calcularPromedio());
}

let clave;
do {
    clave = prompt("Desea *Agregar*, *Eliminar*, *Modificar* o *No* hacer nada a la nota.");
    console.log(clave);
    switch (clave) {
        case "Agregar":
            let nuevaNota;
            do{nuevaNota= parseFloat(prompt("Ingrese la nueva nota: (con , )"));}while(isNaN(nuevaNota))
            notas.push(nuevaNota);
            console.log("Ingrese un valor numérico válido.");
            mostrarNotas();
            break;
        
        case "Eliminar":
            if(notas.length!=0){
            let indiceEliminar = parseInt(prompt("Ingrese la posición de la nota a eliminar (0 a " + (notas.length - 1) + "):"));
            if (indiceEliminar >= 0 && indiceEliminar < notas.length) {
                notas.splice(indiceEliminar, 1);
            } else {
                console.log("Índice inválido.");
            }}else{
                alert("No hay notas agregadas.")
            }
            mostrarNotas();
            break;
        
        case "Modificar":
            if(notas.length!=0){
            let indiceModificar = parseInt(prompt("Ingrese la posición de la nota a modificar (0 a " + (notas.length - 1) + "):"));
            if (indiceModificar >= 0 && indiceModificar < notas.length) {
                let nuevaNotaModificada = parseFloat(prompt("Ingrese la nueva nota:"));
                if (!isNaN(nuevaNotaModificada)) {
                    notas[indiceModificar] = nuevaNotaModificada;
                } else {
                    console.log("Ingrese un valor numérico válido.");
                }
            } else {
                console.log("Índice inválido.");
            }}else{
                alert("No hay notas agregadas.")
            }
            mostrarNotas();
            break;
    }
} while (clave !== "No");

console.log("Promedio final del curso:", calcularPromedio());