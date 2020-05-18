
$(document).ready(main);

//var slideIndex = 0;
            var slideIndex = 1;
            //showSlides();

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

            var contador = 1;

            function main()
            {
                
                var contador = 1;
                $('#iconoConfFiltros').click(function()
                {
                    var ancho = $('body').outerWidth();
                    var barraLateral = document.getElementsByClassName("barraLateral");

                    if(ancho < 768)
                    {
                        //alert("Hello 2");    
                        if(contador == 1)
                        {
                            $('.barraLateral').animate(
                                {
                                    left: '0'
                                });

                            // $('html, body').css({
                            //     overflow: 'hidden',
                            //     height: '100%'
                            // });
                            contador = 0;
                        }
                        else
                        {
                            $('.barraLateral').animate(
                                {
                                    left: '-100%'
                                });
                            // $('html, body').css({
                            //     overflow: 'auto',
                            //     height: '100%'
                            // });
                            contador = 1;
                        }

                    }else
                    {
                        if(contador == 1)
                        {
                            // Escondemos el menú lateral.
                            $( ".barraLateral" ).css("display", "none");
                            $( ".main" ).css("width", "100%");
                            contador = 0;
                        }
                        else
                        {
                            // Mostramos el menú lateral.
                            $( ".barraLateral" ).css("display", "block");
                            $( ".main" ).css("width", "85%");
                            contador = 1;
                        }
                    }
                });
            }

            // $(document).ready(function()
            // {
            //     // Para saber altura de un elemento.
            //     // var altura = $('.barraLateral').offset().top;
            //     // alert(altura);
            // });
