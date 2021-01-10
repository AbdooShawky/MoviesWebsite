

$(function () {

  // calling api 

  let searchArray =[];
  $.ajax({
    type: "GET",
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`,
    data: "",
    async: false,
    success: function (response) {
        let cartona = ``;
        searchArray = response.results;
       // console.log(response.results);
        $.each(response.results, function (indexInArray, valueOfElement) {

            cartona += `
             
            <div class="col-md-4 ">

             <div class=" mb-4 movie-poster position-relative">


             <img src="https://image.tmdb.org/t/p/w500${valueOfElement.poster_path}" class="w-100 himg" alt="${valueOfElement.original_title}">
             <div class="position-absolute rate">

              ${valueOfElement.vote_average}   
              </div>
             <div class="  movie-details  justify-content-center align-items-center ">

             <div class="text-center px-3">   
             
             <h3>${valueOfElement.original_title}</h3>
             <p>${valueOfElement.overview}</p>
             
             </div>
             
             </div>

            </div>
             
             
             </div>

            `;
        });


        $("#movies").append(cartona);
        // $(".movie-details").hide();
    }
});
   
    $(".list-category li span").click(function () { 
        let apiCategory = $(this).data("value");
        if(apiCategory != "trending")
        {
    
           
            $("#movies").empty();
           
            $.ajax({
                type: "GET",
                url: `https://api.themoviedb.org/3/movie/${apiCategory}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`,
                data: "",
                async: false,
                success: function (response) {
                    let cartona = ``;
                    searchArray = response.results;
                
                   // console.log(response.results);
                    $.each(response.results, function (indexInArray, valueOfElement) {
        
                        cartona += `
                         
                        <div class="col-md-4 ">
            
                         <div class=" mb-4 movie-poster position-relative">
            
        
                         <img src="https://image.tmdb.org/t/p/w500${valueOfElement.poster_path}" class="w-100 himg" alt="${valueOfElement.original_title}">
                         <div class="position-absolute rate">
        
                          ${valueOfElement.vote_average}   
                          </div>
                         <div class="  movie-details  justify-content-center align-items-center ">
            
                         <div class="text-center px-3">   
                         
                         <h3>${valueOfElement.original_title}</h3>
                         <p>${valueOfElement.overview}</p>
                         
                         </div>
                         
                         </div>
            
                        </div>
                         
                         
                         </div>
            
                        `;
                    });
        
        
                    $("#movies").append(cartona);
                    // $(".movie-details").hide();
                }
            });
        
        }
        else
        {
            $("#movies").empty();
            $.ajax({
                type: "GET",
                url: "https://api.themoviedb.org/3/trending/movie/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
                data: "",
                async: false,
                success: function (response) {
                    let cartona = ``;
                    searchArray = response.results;
                   // console.log(response.results);
                    $.each(response.results, function (indexInArray, valueOfElement) {
        
                        cartona += `
                         
                        <div class="col-md-4 ">
            
                         <div class=" mb-4 movie-poster position-relative">
            
        
                         <img src="https://image.tmdb.org/t/p/w500${valueOfElement.poster_path}" class="w-100 himg" alt="${valueOfElement.original_title}">
                         <div class="position-absolute rate">
        
                          ${valueOfElement.vote_average}   
                          </div>
                         <div class="  movie-details  justify-content-center align-items-center ">
            
                         <div class="text-center px-3">   
                         
                         <h3>${valueOfElement.original_title}</h3>
                         <p>${valueOfElement.overview}</p>
                         
                         </div>
                         
                         </div>
            
                        </div>
                         
                         
                         </div>
            
                        `;
                    });
        
        
                    $("#movies").append(cartona);
                    // $(".movie-details").hide();
                }
            });
        
    
        }
        
    });
   
 


     //sidebar menu 
     let width = $("#menu").innerWidth();
         $("#menu").css("left" ,`-${width}px`);
         $("#secondMenu").css("marginLeft",  `-${width}px` );

         let h = $(".menu ul").innerHeight();
         $(".menu ul li").css("transform",`translateY(${h}px )`);
         $(".menu ul").animate({transition:"all"},0.1,function(){


            

             for (let i = 0; i <$(".menu ul li").length; i++) {
             
                 $(".menu ul li").eq(i).css("transform" , `translateY(${h}px)`);
                
 
                 $(".menu ul li").eq(i).css("transition" , "all 1s 0."+(i+5)+"s");
                 
             }
             

         });
      
   
    $("#sideToggle").click(function () {

        
        let width = $("#menu").innerWidth();
        let left = $("#menu").css("left");
        if (left == "0px") {

            // menu  
            
           
            $(this).children().removeClass("fa-times").addClass("fa-align-justify");

            $(this).parent().animate({marginLeft:`-${width}px`},500);
           
            $("#menu").animate({ left: `-${width}px` }, 500);


            //=================
         
            let h = $(".menu ul").innerHeight();
            $(".menu ul li").css("transform",`translateY(${h}px )`);
            $(".menu ul").animate({transition:"all"},0.1,function(){


               

                for (let i = 0; i <$(".menu ul li").length; i++) {
                
                    $(".menu ul li").eq(i).css("transform" , `translateY(${h}px)`);
                   
    
                    $(".menu ul li").eq(i).css("transition" , "all 1s 0."+(i+5)+"s");
                    
                }
                

            });

        }
        else {

            //$(".menu ul li").animate({marginBottom: "20px"},2000);
            
            // $(".menu ul ").css("transform" , "translateY(0px)");
            // $(".menu ul").css("transition" , "all 1s "+(1)+"s ");
            let h = $(".menu ul").innerHeight();
            
            $(".menu ul li").css("transform",`translateY(${h}px)`);
            $(".menu ul").animate({transition:"all"},0.1,function(){


                for (let i = 0; i <$(".menu ul li").length; i++) {
                
                    $(".menu ul li").eq(i).css("transform" , "translateY(0px)");
                   
    
                    $(".menu ul li").eq(i).css("transition" , "all 1s 0."+(i+5)+"s");
                    
                }
                

            })
            
            
           

                // $(".menu ul li").eq(0).animate({translateY:""},1000 , function(){


                //     // $(".menu ul li").eq(1).animate({top:"0px"},1000 ,function(){


                //     //     $(".menu ul li").eq(2).animate({top:"0px"},1000 , function(){


                //     //     })

                //     // } );
                // });
                
                // $(".menu ul li").eq(2).animate({padding:"30px"},3000);
                // $(".menu ul li").eq(3).animate({padding:"30px"},3000);
            
            $(this).children().removeClass("fa-align-justify").addClass("fa-times");
            
            $(this).parent().animate({marginLeft: "0px" },500);
            $("#menu").animate({ left: `0px` }, 500);

        }



    });

   

    // search 

    // $("#searchMovie").keyup(function (e) {
    //     let input = $(this).val();
    //     if()
        
    // });



});
