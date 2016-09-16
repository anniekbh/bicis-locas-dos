function validateForm(){
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var mail = document.getElementById("input-email").value;
    var pass = document.getElementById("input-password").value;
    var az = /^[a-zA-Z]+$/;
        if (name, lastname, mail, pass == null || name, lastname, mail, pass == "") {
            alert("Datos obligatorios");
        }
        if (!az.test(name) || !az.test(lastname)){
            alert("Error: Ingresa sólo letras.");
        }  
        if (name.charAt(0) == name.charAt(0).toLowerCase()){
           alert("La primera letra de tu nombre debe ser Mayuscula");
        } 
        if (lastname.charAt(0) == lastname.charAt(0).toLowerCase()){
           alert("La primera letra de tu apellido debe ser Mayuscula");
        }
        if (pass.length < 5 ){
            alert("Contraseña al menos de 6 caracteres");
        } else if(pass == "123456" || pass =="password" || pass == "098754"){
            alert("Por favor escriba otra contraseña");
        }
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expr.test(mail) ){
        	var mensajeValido = document.createElement("span");
			if(mail == ""){
				mensajeValido.innerHTML= "Ingrese su correo por favor."
				var boxBlack = document.getElementsByClassName("input-box")[2].appendChild(mensajeValido);
				boxBlack.classList.toggle("error")
       }
    };
    var bici = document.getElementsByTagName("select")[0].value;
        if ( bici == 0){
            alert("Selecciona tu tipo de bici");
        }
    };