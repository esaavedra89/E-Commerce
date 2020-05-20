
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
                                        width: '250px'
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

            // function OnResize()
            // {
            //     var w = window.outerWidth;
            //     //var h = window.outerHeight;
            //     var barraLateral = $('.barraLateral').css('display');
                
            //     if(w < 768)
            //     {
            //         // Mostramos el menú lateral.
            //         $( ".main" ).css("width", "100%");
                    
            //     }
            //     else if(w > 768 && w < 999)
            //         {
            //             if(barraLateral === "block")
            //             {
            //                 // Mostramos el menú lateral.
            //                 $( ".barraLateral" ).css("width", "20%");
            //                 $( ".main" ).css("width", "80%");
            //             }
            //             else
            //             {
            //                 // Mostramos el menú lateral.
            //                 $( ".barraLateral" ).css("width", "0%");
            //                 $( ".main" ).css("width", "100%");
            //             }  
            //         }
            //         else if(w > 999)
            //         {
            //             if(barraLateral === "block")
            //             {
            //                 // Mostramos el menú lateral.
            //                 $( ".barraLateral" ).css("width", "15%");
            //                 $( ".main" ).css("width", "85%");
            //             }
            //             else
            //             {
            //                 // Mostramos el menú lateral.
            //                 $( ".barraLateral" ).css("width", "0%");
            //                 $( ".main" ).css("width", "100%");
            //             }  
            //         }
            // }
