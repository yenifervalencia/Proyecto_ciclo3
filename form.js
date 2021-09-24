document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit', checkDir); //es la manera de decir que esta funcion checkDir es para el formulario de id=form-registro
    // para agregar otra funcion a este documento debe repetir la linea de ariba pero cambiando el nombre de la funcion
    document.getElementById("form-registro").addEventListener('submit', checkGen); //verifica la funcion chekGen osea verifica que tenga un genero seleccionado
    document.getElementById("form-registro").addEventListener('submit',checkNombre) //VERIFICA LA FUNCION CHECKNAME Y SUS PARAMETROS
  });  
  validacionNombre=/^[a-zA-ZÀ-ÿ\s]{1,30}$/; // Esta formula valida que no se supere de 30 caracteres o sea menos de un caracter,ademas de que permite validar que solo sean Letras y espacios,pueden llevar acentos.

  direccionCorrect=/^[a-zA-Z0-9\#\-]{1,50}$/; //es el parametro que me permite decir que acepta letras y numeros y los caracteres especiales #- y de 1 a 50 cantidad


  function checkNombre(valor) { //FUNCION QUE PERMITE VALIDAR EL NOMBRE
      valor.preventDefault();
      var nombre = document.getElementById('nombre').value; //TOMA EL VALOR DEL INPUT,NO PERMITE QUE QUEDE EL CAMPO VACIO
      if(validacionNombre.test(nombre)){ //SI SE CUMPLEN LOS PARAMETROS DE LA FORMULA PUESTA EN LA PARTE SUPERIOS,SE VA RETORNAR UN VALOR TRUE
          return true;
      }
      else{ //SI NO SE CUMPLE LA FORMULA, EL SISTEMA MANDARA UNA ALERTA DE AVISO QUE LE INFORMARA AL USUARIO QUE NO CUMPLE CON LOS PARAMETROS Y RETORNARA UN VALOR FALSE
          alert('El nombre no cumple con los parametros establecidos');
          return false;
      }
  }

  function checkDir(valor) { //mi Funcion
    valor.preventDefault();
    var direccion=document.getElementById('direccion').value; //captura el valor del input del resgistro.html
    if(direccionCorrect.test(direccion)){ //hace la comparacion que direccion cumpla con los parametros de direccionCorrect
      return true;
    }else{
    
      alert('Direccion incorrecta');
      return false;
    }
}
//module.exports=checkDir; lo puse asi por q tira error aun no se por q

function checkGen(valor){
    valor.preventDefault();
  if(!document.querySelector('input[name="color"]:checked')==true) {//si hay algun selector activo arroja false
    alert("Seleccione por favor un genero");
      return false;
    }else{
        return true;
}
}
