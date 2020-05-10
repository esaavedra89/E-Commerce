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
