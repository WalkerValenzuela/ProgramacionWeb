let persona = [{nombre:"Walker", edad:18, peso:65.2}];
let Nombre=document.getElementById("inputNombre");
let Edad=document.getElementById("inputEdad");
let Peso=document.getElementById("inputPeso");
let textPanel=document.getElementById("textpanel");
textPanel.innerHTML="Persona creada por Defecto: <br>"+leerPersonas();

function leerPersonas(){
    let text="";
    for (const element of persona) {
        text+=" Nombre: "+element.nombre+" - ";
        text+=" Edad: "+element.edad+" - ";
        text+=" Peso: "+element.peso+"<br> ";
    }
    return text;
}

function camposCompletos(){
    if(Nombre.value!="" && Edad.value!="" && Peso.value!="" ){
        return true;
    }else{
        return false;
    }
}

const bCrear=document.getElementById("bCrear");
    bCrear.addEventListener("click",()=>{
        if(camposCompletos()){
            persona.push({nombre:Nombre.value, edad:Edad.value, peso:Peso.value});
            textPanel.innerHTML=leerPersonas();
            console.log(persona);
        }else{
            alert("Inserta informacion en todos los campos.");
        }
});

const bFiltrar=document.getElementById("bFiltrar");
    bCrear.addEventListener("click",()=>{
        
});

const bEliminar=document.getElementById("bEliminar");
    bCrear.addEventListener("click",()=>{
 
});

const bModificar=document.getElementById("bModificar");
    bCrear.addEventListener("click",()=>{
 
});


