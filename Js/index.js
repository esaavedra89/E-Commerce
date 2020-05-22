
$(document).ready(main);

// Eventos.
document.getElementById('btnAdicionar').addEventListener('click', sumar);
document.getElementById('btnRestar').addEventListener('click', restar);

// Varaibles.
var slideIndex = 1;
var contador = 1;
var a = 1;

// Captar.
var cantidadArticulo = document.getElementById("inpCantidad"); // obtenemos el elemento
cantidadArticulo.value = 1;
// Metodos.
            function showSlides() {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                for (i = 0; i < slides.length; i++)
                {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if(slideIndex > slides.length) 
                {
                    slideIndex = 1
                }
                slides[slideIndex-1].style.display = "block";
                setTimeout(showSlides,3000);
            }

            function plusSlides(numero)
            {
                //var slideIndex = 1;
                // var slides = document.getElementsByClassName("Slides");
                var slides = document.getElementsByClassName("slideActivo");

                for (i = 0; i < slides.length; i++)
                {
                    slides[i].style.display = "none";
                }
                
                //alert(slides.length);
                if(numero == 1)
                {
                    if(slideIndex == 1)
                    {
                        slideIndex++;
                        slides[slideIndex-1].style.display = "block";
                    }  
                    else if(slideIndex == 2)
                    {
                        slideIndex++;
                        slides[slideIndex-1].style.display = "block";
                    }
                    else
                    {
                        slideIndex = 1;
                        slides[0].style.display = "block";
                    }
                }
                else
                {
                    if(slideIndex == 1)
                    {
                        slideIndex = 3;
                        slides[slideIndex-1].style.display = "block";
                    }  
                    else if(slideIndex == 2)
                    {
                        slideIndex--;
                        slides[slideIndex-1].style.display = "block";
                    }
                    else
                    {
                        slideIndex--;
                        slides[slideIndex-1].style.display = "block";
                    }
                }
            }

            

            function main()
            {
                var contador = 0;
                $('#iconoConfFiltros').click(function()
                {
                    var barraLateral = document.getElementsByClassName("barraLateral");
                    var ancho = $('body').outerWidth();
                    var w = window.outerWidth;
                    if(ancho < 768)
                    {
                        //alert("Hello 2");    
                        if(contador == 0)
                        {
                            $('.barraLateral').animate(
                                {
                                    left: '-100%',
                                    width: '0px'
                                });
                            contador = 1;
                        }
                        else
                        {
                            $('.barraLateral').animate(
                                    {
                                        left: '0',
                                        width: '200px'
                                    });
                            contador = 0;
                        }
                    }
                    else if(ancho >= 768 && ancho < 999)
                    {
                        if(contador == 1)
                        {
                            // Escondemos el menú lateral.
                            $( ".barraLateral" ).css("display", "none");
                            $( ".barraLateral" ).css("width", "0px");
                            $( ".mainn" ).css("border-left", "none");
                            contador = 0;
                        }
                        else
                        {
                            // Mostramos el menú lateral.
                            $( ".barraLateral" ).css("display", "inline-block");
                            $( ".barraLateral" ).css("width", "20%");
                            $( ".mainn" ).css("border-left", "1px solid lightgrey");
                            contador = 1;
                        }
                    }
                    else
                    {
                        if(contador == 1)
                        {
                            // Escondemos el menú lateral.
                            $( ".barraLateral" ).css("display", "none");
                            $( ".barraLateral" ).css("width", "0px");
                            $( ".mainn" ).css("border-left", "none");
                            contador = 0;
                        }
                        else
                        {
                            // Mostramos el menú lateral.
                            $( ".barraLateral" ).css("display", "inline-block");
                            $( ".barraLateral" ).css("width", "15%");
                            $( ".mainn" ).css("border-left", "1px solid lightgrey");
                            contador = 1;
                        }
                    }
                });
            }

// Suma artículos.
function sumar () {
    a = a + 1;
    cantidadArticulo.value = a;
}

// Resta artículos.
function restar () {
  
 if (cantidadArticulo.value == 0)
 { 
     return; // validamos que el valor no sea menor a 0
 }
 
 a = a - 1;
 cantidadArticulo.value = a;
}      
