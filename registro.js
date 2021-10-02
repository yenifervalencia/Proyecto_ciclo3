document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit',filtrarCorreo)
});


function conseguirDatos(){
    function Persona(nombre,sexo,telefono,direccion,correo,contrasena){
        this.nombre=nombre;
		this.sexo=sexo;
        this.telefono=telefono;
        this.direccion=direccion;
        this.correo=correo;
        this.contrasena=contrasena;
    }
     datoNombre = document.getElementById('nombre').value;
     datoGenero = document.querySelector('input[name="sexo"]:checked').value;
     datoTelefono = document.getElementById('telefono').value;
    datoDireccion=document.getElementById('direccion').value;
    datoCorreo = document.getElementById('correo').value;
    datoContrasena = document.getElementById('contrasena').value;
    nuevoCliente = new Persona(datoNombre,datoGenero,datoTelefono,datoDireccion,datoCorreo,datoContrasena);

	console.log(nuevoCliente);
    agregarRegistro();
}
var arreglo = [];
function agregarRegistro(){
	arreglo.push(nuevoCliente);
	console.log(arreglo);
}


function filtrarCorreo(){
    let filtro=arregloo.filter((arregloo) => arregloo.correo.includes("@gmail.com"));
    console.log(filtro);    
}
