// Eventos.
document.getElementById('btnAdicionar-CarritoDeCompras').addEventListener('click', Sumar);
document.getElementById('btnRestar-CarritoDeCompras').addEventListener('click', Restar);
document.getElementById('btnEliminar-CarritoDeCompras').addEventListener('click', EliminarArticulo);

// Varaibles.
var a = 1;

// Captar.
var cantidadArticulo = document.getElementById("cantidadProducto-CarritoDeCompras"); // obtenemos el elemento
cantidadArticulo.value = 1;

// Muestra spinner en boton pagar.
function Pagar()
{
    var spinner = document.getElementById("spinner");
    spinner.style.visibility = "visible";
    setTimeout(function(){ alert("Hello"); }, 3000);
}

// Pagína anterior.
function goBack() 
{
    window.history.back();
}

// Suma artículos.
function Sumar () {
    a = a + 1;
    cantidadArticulo.value = a;
}

// Resta artículos.
function Restar () {
  
 if (cantidadArticulo.value == 0)
 { 
     return; // validamos que el valor no sea menor a 0
 }
 
 a = a - 1;
 cantidadArticulo.value = a;
}

// Confirmación eliminar artículo.
function EliminarArticulo()
{
    var mensaje;
    var opcion = confirm("¿Desea eliminar este artículo?");
    if (opcion == true) {
        alert("Artículo eliminado.");
	} 
}

