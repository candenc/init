let menuB=document.getElementById("menuB").addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
})
let btn1=document.getElementById("btn1").addEventListener('click', ()=>{
    console.log("Haz clickeado");
    swal("Hello world!");
    
})
let btn2=document.getElementById("btn2").addEventListener('click', ()=>{
    console.log("Haz clickeado");
    
})

const baseDatos=window.localStorage;

const nombre=document.getElementById("name");
const edad=document.getElementById("numero");
const direccion=document.getElementById("direccion"); 

const guadarContacto = (baseDatos,contacto) => {
    baseDatos.setItem(contacto.id, JSON.stringify(contacto));

} 

let btnAg=document.getElementById("btnAg").addEventListener('click', (e)=>{
    console.log("Haz clickeado");
    e.preventDefault(e);
    let contacto= {
        nombre:nombre.value,
        numero:edad.value,
        direccion:direccion.value,
    }
    guadarContacto(baseDatos,contacto);
})



const cargarContactos=(baseDatos)=>{
    let claves= Object.keys(baseDatos);
    console.log(claves);
    for (clave of claves){
        console.log(clave);
        let contacto=JSON.parse(baseDatos.getItem(clave));
        console.log(contacto);
    }
}


cargarContactos(baseDatos);

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.notice', {delay: 5000});


