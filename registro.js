document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit',filtrarCorreo)
});

function agregarRegistro(){
	function capturar(){
		function Persona(nombre) {
			this.nombre = nombre;
		}
		var nombreCapturar = document.getElementById("nombre").value;
		nuevoCliente = new Persona(nombreCapturar);
		console.log(nuevoCliente);
		agregar();
	}
	var arreglo = [];
	function agregar(){
		arreglo.push(nuevoCliente);
		console.log(arreglo);
	}
}


function filtrarCorreo(){
    let filtro=arregloo.filter((arregloo) => arregloo.correo.includes("@gmail.com"));
    console.log(filtro);    
}
