document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit',filtrarCorreo)
});


let registros = []; 

function agregar(){
    //console.log("Capturado");
    function Persona(
      nombreP,
     
      telefonoP,
      direccionP,
      correoP,
      contrasenaP
    ) {
      this.nombreP = nombreP;
      
      this.telefonoP = telefonoP;
      this.direccionP = direccionP;
      this.correoP = correoP;
      this.contrasenaP = contrasenaP;
    }
    var nombre= document.getElementById("nombre").value;
    //console.log(nombreCapturar);
   
    //console.log(generoCapturar);
    var telefono = document.getElementById("telefono").value;
    //console.log(telefonoCapturar);
    var direccion = document.getElementById("direccion").value;
    //console.log(direccionCapturar);
    var correo = document.getElementById("correo").value;
    //console.log(correoCapturar);
    var contrasena = document.getElementById("contrasena").value;
    //console.log(contrasenaCapturar);
    nuevoCliente = new Persona(
      nombre,    
      telefono,
      direccion,
      correo,
      contrasena
    );
    //console.log(nuevoCliente);
   
  
  
      registros.push(nuevoCliente);
      registros.forEach((e) => {
        console.log(e);
    });
      
  }


function filtrarCorreo(registros){
    let filtro=registros.filter((arregloo) => arregloo.correo.includes("@gmail.com"));
	filtro.forEach(element => {
        console.log(element);
    });
	return filtro;      
}
