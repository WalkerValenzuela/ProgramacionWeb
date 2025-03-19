const Pi= 3.1416;
const persona={nombre: "Walker", apellido: "Valenzuela", edad: 18};
const arrreglo=[1.234, "text", [23, 25],{nombre: "juan", apellido:"algo"}];
//let nombre1= prompt("Ingrese el nombre de la persona1");
//let edad1= prompt("Ingrese la edad de la persona1");
//let nombre2= prompt("Ingrese el nombre de la persona2");
//let edad2= prompt("Ingrese la edad de la persona2");

// `` "" ''
 
//console.log("Nombre1: "+nombre1);
//console.log("Nombre2: "+nombre2);
//console.log("Edad1: "+edad1);
//console.log("Edad2: "+edad2);

//if(edad1>edad2){
    //alert("La persona 1 es mayor");
//    console.log("La persona 1 es mayor");
//} else if(edad1<edad2){
    //alert("La persona 2 es mayor");
//    console.log("La persona 2 es mayor");
//} else{
    //alert("Tienen la misma edad");
//   console.log("Tienen la misma edad");
//}


for (const key in persona){
    console.log(persona[key]);

}

for (const key of arrreglo){
    console.log(key);
}

let elemento=document.getElementById("text");
elemento.innerHTML="Hola mundooo desde JS";

//continue=salta ciclo y break rompe el ciclo en for.
//alert("Hola "+nombre);
//alert("Edad "+Number(edad));

//TypeOf(); Ver tipo de variable

//** Potencia

//Comparadores Relacionales los mismo y todo a JAVA === Igual en tipo y en contenido