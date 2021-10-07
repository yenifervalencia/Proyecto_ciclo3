<<<<<<< HEAD
/*document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form-registro").addEventListener('submit',filtrarCorreo)
});*/
=======
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit',filtrarCorreo)
});
>>>>>>> origin/master
//comentar lo de arriba


let registros = []; 

function agregarRegistro(){
<<<<<<< HEAD
 
 let nombreUsu= document.getElementById("nombre").value;
  let telefonoUsu = document.getElementById("telefono").value;
  let direccionUsu = document.getElementById("direccion").value;
  let correoUsu = document.getElementById("correo").value;
  let contrasenaUsu = document.getElementById("contrasena").value;

  let nuevoCliente = {
    "nombre": nombreUsu,
      //    "genero": generoUsu,
      "telefono": telefonoUsu,
      "direccion": direccionUsu,
      "correo": correoUsu,
      "password": contrasenaUsu
=======
   
   let nombreUsu= document.getElementById("nombre").value;
    let telefonoUsu = document.getElementById("telefono").value;
    let direccionUsu = document.getElementById("direccion").value;
    let correoUsu = document.getElementById("correo").value;
    let contrasenaUsu = document.getElementById("contrasena").value;

    let nuevoCliente = {
      "nombre": nombreUsu,
        //    "genero": generoUsu,
        "telefono": telefonoUsu,
        "direccion": direccionUsu,
        "correo": correoUsu,
        "password": contrasenaUsu
    }
   
  
  
      registros.push(nuevoCliente);
      registros.forEach((e) => {
        console.log(e);
    });
      
>>>>>>> origin/master
  }
 


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

function ordenarArreglo(arreglo){
<<<<<<< HEAD
arreglo.sort(function (fa, fb) {
  let a = fa.nombre,
          b = fb.nombre;
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
console.log(arreglo);
return arreglo;
}

module.exports = { agregarRegistro, filtrarCorreo, ordenarArreglo, registros };
//descomentar el module para subir al bot
=======
  arreglo.sort(function (fa, fb) {
	  let a = fa.nombre,
            b = fb.nombre;
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  console.log(arreglo);
  return arreglo;
  }

//module.exports = { agregarRegistro, filtrarCorreo, ordenarArreglo, registros };
//descomentar el module para subir al bot

>>>>>>> origin/master
