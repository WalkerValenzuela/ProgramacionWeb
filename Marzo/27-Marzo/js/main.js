// Funciones que reciben como parametro otra funcion.
// Funciones que returnan una funcion.

const mayorQue=(a, b)=>{return a>b};

const mayorQue10=(n)=>{ return mayorQue(n, 10)}

console.log(mayorQue(1,2));
console.log(mayorQue10(9));

//JS tiene funciones de orden superior propias.

//forEach
// Recorre un array y ejecuta una función por cada elemento.
const numero=[1,2,3,4,5];
numero.forEach( (item)=>{console.log(item**2)} );

//Find
// Busca el primer elemento que cumple una condición y devuelve el elemento.

const arrayObjetos=[
    {id:1, nombre:'Juan', edad:20},
    {id:2, nombre:'Pedro', edad:25},
    {id:3, nombre:'Ana', edad:30}
];

const sal = arrayObjetos.find( (item)=>item.id===2);
console.log(sal);

//Filter
// Busca todos los elementos que cumplan una condición y devuelve un array con esos elementos.

const salida2 = arrayObjetos.filter((item)=>item.edad>=25);
console.log(salida2);

//Some
// Busca si al menos un elemento cumple una condición y devuelve true o false.

const salida3 = arrayObjetos.some((item)=>item.edad==20);
console.log(salida3);

//Every
// Busca si todos los elementos cumplen una condición y devuelve true o false.
const salida4 = arrayObjetos.every((item)=>item.edad>20);
console.log(salida4);

// Map
// Busca todos los elementos que cumplan una condición y devuelve un array con esos elementos.
const salida5 = arrayObjetos.map((item)=>item.edad);
console.log(salida5);

// Reduce
// Devuelve la suma de los valores en 1.

const salida6 = arrayObjetos.reduce((total, item)=>total+item.edad,0);
console.log(salida6);

// Sort
// Ordena un array de forma ascendente o descendente.

  // Copia del arreglo para orden ascendente
  const copiaAscendente = arrayObjetos.slice();
  const salida7 = copiaAscendente.sort((a,b)=>a.edad-b.edad);
  console.log("Orden ascendente:", salida7);
  
  // Copia del arreglo para orden descendente
  const copiaDescendente = arrayObjetos.slice();
  const salida8 = copiaDescendente.sort((a,b)=>b.edad-a.edad);
  console.log("Orden descendente:", salida8);
  
  // El arreglo original no se ha modificado
  console.log("Arreglo original:", arrayObjetos);