document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit', checkDir); //es la manera de decir que esta funcion checkDir es para el formulario de id=form-registro
    // para agregar otra funcion a este documento debe repetir la linea de ariba pero cambiando el nombre de la funcion
    document.getElementById("form-registro").addEventListener('submit', checkGen); //verifica la funcion chekGen osea verifica que tenga un genero seleccionado
  });  

  direccionCorrect=/^[a-zA-Z0-9\#\-]{1,50}$/; //es el parametro que me permite decir que acepta letras y numeros y los caracteres especiales #- y de 1 a 50 cantidad
  
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

