/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro variable 
	var	nombreIngresado;

	//guardo el dato
	nombreIngresado = prompt("nombreIngresado");

	//asigno nombre a la caja de texto
	txtIdNombre.value = nombreIngresado;
	
    //otra forma de asignar, cualquiera es valida.
	//document.getElementById("txtIdNombre").value = nombreIngresado;
}

