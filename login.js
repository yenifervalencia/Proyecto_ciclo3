document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-login").addEventListener('submit',login)
  });

let registros = [{correo:"alvaro@gmail.com",telefono:"1234567",contrasena:"123456"}];
var cont = 1;
function login() {
    corr = document.getElementById('correo').value,
        tel = document.getElementById('telefono').value,
        pass = document.getElementById('contrasena').value;

        registros.forEach(element => {
            if ((corr==element.correo && tel==element.telefono)) { 
                if(pass==element.contrasena){
                    cont += 1;                      
                    console.log("true");
                      return true;
                }
                    
    
        } else {
            cont += 1;           
            console.log("false");
    
            return false;
        }
        });
        

    
}

function validarCaptcha(mainCaptcha, txtInput) {
    mainCaptcha = 'ocaso';
    var string1 = removeSpaces(getElementValue(mainCaptcha));
    var string2 = removeSpaces(getElementValue(txtInput));
    document.write(string2.toLowerCase());
    if (string1 == string2) {
      return true;
    } else {
      Captcha(mainCaptcha);
      return false;
    }
  }

}
