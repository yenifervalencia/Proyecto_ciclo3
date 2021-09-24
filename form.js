document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form-registro").addEventListener('submit', checkNombre); //VERIFICA LA FUNCION CHECKNAME Y SUS PARAMETROS
    document.getElementById("form-registro").addEventListener("submit", checkGen); //verifica la funcion chekGen osea verifica que tenga un genero seleccionado
    document.getElementById("form-registro").addEventListener("submit", checkTelefono);
    document.getElementById("form-registro").addEventListener("submit", checkDir); //es la manera de decir que esta funcion checkDir es para el formulario de id=form-registro
    document.getElementById("form-registro").addEventListener("submit", checkCorreo);
    document.getElementById("form-registro").addEventListener("submit", checkContrasena);
    // para agregar otra funcion a este documento debe repetir la linea de ariba pero cambiando el nombre de la funcion 
    });

validacionNombre=/^[a-zA-ZÀ-ÿ\s]{1,30}$/; // Esta formula valida que no se supere de 30 caracteres o sea menos de un caracter,ademas de que permite validar que solo sean Letras y espacios,pueden llevar acentos.
telefonoCorrect = /^\d{7,15}$/; // 7 a 15 numeros.
direccionCorrect = /^[a-zA-Z0-9\#\-]{1,50}$/; //es el parametro que me permite decir que acepta letras y numeros y los caracteres especiales #- y de 1 a 50 cantidad
correoCorrect = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
contraCorrect = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^ñ&*]{8,25}$/;//Revison, minimo un num, minuscula, mayucula y permite agregar letras, numero y caracteres especiales

//Valdiar Nombre
function checkNombre(valor) { //FUNCION QUE PERMITE VALIDAR EL NOMBRE
    valor.preventDefault();
    var nombre = document.getElementById('nombre').value; //TOMA EL VALOR DEL INPUT,NO PERMITE QUE QUEDE EL CAMPO VACIO
    if(validacionNombre.test(nombre)){ //SI SE CUMPLEN LOS PARAMETROS DE LA FORMULA PUESTA EN LA PARTE SUPERIOS,SE VA RETORNAR UN VALOR TRUE
        return true; }
    else{ //SI NO SE CUMPLE LA FORMULA, EL SISTEMA MANDARA UNA ALERTA DE AVISO QUE LE INFORMARA AL USUARIO QUE NO CUMPLE CON LOS PARAMETROS Y RETORNARA UN VALOR FALSE
        alert('Nombre no válido');
        return false;}
}
//Validar Genero
function checkGen(valor) {
    valor.preventDefault();
    if (!document.querySelector('input[name="color"]:checked') == true) {
      //si hay algun selector activo arroja false
      alert("Seleccione un genero");
      return false;}
    else {
      return true;}
}
//Validar Telefono
function checkTelefono(valor){
    valor.preventDefault();
    var telefono = document.getElementById("telefono").value;
    if(telefonoCorrect.test(telefono)){
      return true;} 
    else {
      alert("Telefono no válido");
      return false;}
}
//Validar Direccion
function checkDir(valor){
    valor.preventDefault();
    var direccion = document.getElementById("direccion").value; //captura el valor del input del resgistro.html
    if (direccionCorrect.test(direccion)) {
      //hace la comparacion que direccion cumpla con los parametros de direccionCorrect
      return true;} 
    else {
      alert("Direccion no válida");
      return false;}
}
//Validar Correo
function checkCorreo(valor){
    valor.preventDefault();
    var correo = document.getElementById("correo").value;
    if(correoCorrect.test(correo)){
      return true;} 
    else {
      alert("Correo no válido");
      return false; }
} 
//Validar Contraseña
function checkContrasena(valor){
    valor.preventDefault();
    var contra = document.getElementById("contrasena").value;
    if(contraCorrect.test(contra)){
      return true;} 
    else {
      alert("Contraseña no válida");
      return false; }
      
} 
module.exports=checkNombre;
module.exports=checkGen;
module.exports=checkTelefono;
module.exports=checkDir;
module.exports=checkCorreo; 
module.exports=checkContrasena;
//lo puse asi por q tira error aun no se por q
  //no sé la manera de arreglar ese error.
  