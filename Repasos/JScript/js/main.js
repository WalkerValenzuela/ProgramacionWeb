let titulo=document.getElementById("titulo");
let tpanel=document.getElementById("tpanel");
let text1 ="";
let arreglo =["Walker", "Alejandro"];
let arreglote = [{edad:12, nombre:"Walker"},{edad:17, nombre:"Alejandro", id:1.3}];

for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    console.log(element);
}

for (const element of arreglote) {
    console.log(element.edad)
    console.log(element.nombre)
    if(element.id!=undefined){
        console.log(element.id)
    }
}

console.log(arreglo);
console.log(arreglote);

titulo.innerHTML="Hola mundooo desde JS";

//Ponemos un escuchador al boton para recibir instrucciones.
const bClick=document.getElementById("botonact");
bClick.addEventListener("click",()=>{
    let newtitulo=document.getElementById("newtitulo");
    if(newtitulo.value != ""){
        titulo.innerHTML=newtitulo.value;
    }else{
        alert("Pon un titulo");
    }
});


  
// crea un nuevo div
// y añade contenido
let newDiv = document.createElement("div");
let newContent = document.createTextNode("Hola!¿Qué tal?");
newDiv.appendChild(newContent); //añade texto al div creado.
// añade el elemento creado y su contenido al DOM
let currentDiv = document.getElementById("div1");
document.body.insertBefore(newDiv, currentDiv);

  