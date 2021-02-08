

$(function () {

    // calling api 

    let searchArray = [];
    $.ajax({
        type: "GET",
        url: `https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&`,
        data: "",

        async: false,
        success: function (response) {
            let cartona = ``;
            searchArray = response.results;
            // console.log(response.results);
            $.each(response.results, function (indexInArray, valueOfElement) {

                cartona += `
             
            <div class="col-md-4 shadow">

             <div class=" mb-4 movie-poster position-relative">


             <img src="https://image.tmdb.org/t/p/w500${valueOfElement.poster_path}" class="w-100 himg" alt="${valueOfElement.title}">
             <div class="position-absolute rate">

              ${valueOfElement.vote_average}   
              </div>
             <div class="  movie-details  justify-content-center align-items-center ">

             <div class="text-center px-3">   
             
             <h3>${valueOfElement.title}</h3>
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
        if (apiCategory != "trending") {


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
            
        
                         <img src="https://image.tmdb.org/t/p/w500${valueOfElement.poster_path}" class="w-100 himg" alt="${valueOfElement.title}">
                         <div class="position-absolute rate">
        
                          ${valueOfElement.vote_average}   
                          </div>
                         <div class="  movie-details  justify-content-center align-items-center ">
            
                         <div class="text-center px-3">   
                         
                         <h3>${valueOfElement.title}</h3>
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
        else {

            $("#movies").empty();
            $.ajax({
                type: "GET",
                url: "https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
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
            
        
                         <img src="https://image.tmdb.org/t/p/w500${valueOfElement.poster_path}" class="w-100 himg" alt="${valueOfElement.title}">
                         <div class="position-absolute rate">
        
                          ${valueOfElement.vote_average}   
                          </div>
                         <div class="  movie-details  justify-content-center align-items-center ">
            
                         <div class="text-center px-3">   
                         
                         <h3>${valueOfElement.title || valueOfElement.name}</h3>
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
    $("#menu").css("left", `-${width}px`);
    $("#secondMenu").css("marginLeft", `-${width}px`);

    let h = $(".menu ul").innerHeight();
    $(".menu ul li").css("transform", `translateY(${h}px )`);
    $(".menu ul").animate({ transition: "all" }, 0.1, function () {




        for (let i = 0; i < $(".menu ul li").length; i++) {

            $(".menu ul li").eq(i).css("transform", `translateY(${h}px)`);


            $(".menu ul li").eq(i).css("transition", "all 1s 0." + (i + 5) + "s");

        }


    });


    // animate menu when clicked
    $("#sideToggle").click(function () {


        let width = $("#menu").innerWidth();
        let left = $("#menu").css("left");
        if (left == "0px") {

            // menu closed 


            $(this).children().removeClass("fa-times").addClass("fa-align-justify");

            $(this).parent().animate({ marginLeft: `-${width}px` }, 500);

            $("#menu").animate({ left: `-${width}px` }, 500);

            let h = $(".menu ul").innerHeight();
            $(".menu ul li").css("transform", `translateY(${h}px )`);
            $(".menu ul").animate({ transition: "all" }, 0.1, function () {




                for (let i = 0; i < $(".menu ul li").length; i++) {

                    $(".menu ul li").eq(i).css("transform", `translateY(${h}px)`);


                    $(".menu ul li").eq(i).css("transition", "all 1s 0." + (i + 5) + "s");

                }


            });

        }
        else {
            // menu opened

            let h = $(".menu ul").innerHeight();

            $(".menu ul li").css("transform", `translateY(${h}px)`);
            $(".menu ul").animate({ transition: "all" }, 0.1, function () {


                for (let i = 0; i < $(".menu ul li").length; i++) {

                    $(".menu ul li").eq(i).css("transform", "translateY(0px)");


                    $(".menu ul li").eq(i).css("transition", "all 1s 0." + (i + 5) + "s");

                }


            })


            $(this).children().removeClass("fa-align-justify").addClass("fa-times");

            $(this).parent().animate({ marginLeft: "0px" }, 500);
            $("#menu").animate({ left: `0px` }, 500);

        }



    });



    // real time search 

    $("#searchCategory").keyup(function (e) {
        let input = $(this).val();
        let cartona = ``;
        $('#movies').empty();
        // console.log(searchArray);
        for (const iterator of searchArray) {

            if (iterator.title.toLowerCase().includes(input.toLowerCase())) {


                cartona += `
                         
                <div class="col-md-4 ">
    
                 <div class=" mb-4 movie-poster position-relative">
    

                 <img src="https://image.tmdb.org/t/p/w500${iterator.poster_path}" class="w-100 himg" alt="${iterator.title}">
                 <div class="position-absolute rate">

                  ${iterator.vote_average}   
                  </div>
                 <div class="  movie-details  justify-content-center align-items-center ">
    
                 <div class="text-center px-3">   
                 
                 <h3>${iterator.title}</h3>
                 <p>${iterator.overview}</p>
                 
                 </div>
                 
                 </div>
    
                </div>
                 
                 
                 </div>
    
                `;

            }
        }
        $("#movies").append(cartona);

    });

    $(".srearchResults").css("visibility", `hidden`);

    // search by movie name
    $("#searchMovie").on("keyup", function (e) {

        let input = $(this).val();
        // calling api to get movies that contains the name in search textbox
        let res = getMoviesByWord(input);
        let cartona = ``;

        $("#srearchResults ul").empty();
        if (input == "") {

            $(".srearchResults").css("visibility", `hidden`);
        }
        else {


            // looping on the results that came from api
            for (let i = 0; i < res.length; i++) {


                cartona += `
                    <li  class="d-flex align-item-center  movieId" style="border-bottom:1px solid rgba(0,0,0,0.1);">
                     
                       <a class=" d-flex w-100" data-mov="${res[i].id}">             
                           <img src="https://image.tmdb.org/t/p/w500${res[i].poster_path}" class="img-fluid himg" alt="${res[i].title}" style="width:60px; height:70px">

                           <p class=" p-3"> ${res[i].title}</p>
                        </a>

                    
                    </li>
                `;
            }

            $("#srearchResults ul").append(cartona);
            // size of ul that api to be displayed in it   
            let liHeight = $(".srearchResults ul li").innerHeight() * 5;
            $(".srearchResults ul").css("height", `${liHeight}px`);
            $(".srearchResults").css("visibility", `visible`);
        }

    });



    $(".srearchResults ul").on("click", "a", function (event) {


        let id = $(this).data('mov');

       
        $('#movies').empty();
        $.ajax({
            type: "GET",
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&`,
            data: "",
            async: false,
            success: function (response) {
                let cartona = ``;
                cartona += `
                 
                
    <div class="container">

    <div class="row p-3 shadow rounded" id="searchRow">

        <div class="col-md-4 text-center  position-relative">
        <img src="https://image.tmdb.org/t/p/w500${response.poster_path}" class="w-100 himg" alt="${response.title}">
        </div>
        <div class="col-md-5 ">

            <h3 class="h2 p-3 font-weight-bolder">${response.title}</h3>
            <p class="font-weight-bolder m-2 h6 my-3">Realse date: <span class="text-info"> ${response.release_date} </span></p>
            <div class="p-3">
              <p class="h6 ">
                  ${response.overview} <br/>
              </p>
               <p class="card bg-warning d-inline-block text-dark p-1 mt-3"> Rate: ${response.vote_average}</p>
            </div>

        </div>


    </div>
</div>
                `;
                $("#movies").append(cartona);

            }
        });




    });


    $(window).click(function () {
        //Hide the menus if visible
        if ($(".srearchResults").css("visibility") == "visible") {
            $(".srearchResults").css("visibility", `hidden`);
        }

    });

    $('.srearchResults , #searchMovie').click(function (event) {
        event.stopPropagation();
    });




});


function getMoviesByWord(e) {

    let res = [];
    $.ajax({
        type: "GET",
        url: "http://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&",
        data: { query: e },
        async: false,
        success: function (response) {

            res = response.results;

        },
       
    });
    return res;
}
