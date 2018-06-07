
let buttonName = ["dog", "cat", "mouse", "horse", "elephant", "tiger", "zebra", "skunk", "lizard", "unicorn", "lion", "ladybug", 
                  " platypus", "crocodile", "shark", "whale", "monkeys"];
let name = "";
let limit = 10;
let searchParam ="dog";
let newAnimal = "";

$("#submitAnimal").on("click", function(){

newAnimal = $("#newAnimal").val();

console.log(newAnimal);

addButton(newAnimal);
//console.log("here");
//$("#animalForm").reset();
});
    



let imgID = "test";

let imgs = $("<img>");

function addButton(Name) {


let buttonSection = $("<button></button>");

buttonSection.attr("type", "button");


buttonSection.addClass("btn");
buttonSection.addClass("btn-primary");
buttonSection.addClass("btn-lg");
buttonSection.addClass("btnstyles");
buttonSection.addClass("anyButton");
buttonSection.attr("id",Name);
buttonSection.text(Name);



$("buttonSection").append(buttonSection);  

}

for (let i=0; i < buttonName.length; i++){

addButton(buttonName[i]);

}


let refreshFlag = false;
let firstTime = false;

// function deleteDivs() {
//     $("#gifs").remove();
//     $("#rating").remove();
// }

$(document).ready(function() {

let clickTrack = 0;


$(document).on("click",".anyButton", function(){

    //clickTrack++;
    $("div").remove();
  
let cardDiv = $("<div></div>");
let cardBodyDiv = $("<div></div>");
let cardTextP = $("<p></p>");
let cardImg = $("<img>");

cardDiv.addClass("card");
cardDiv.css("width","18rem");
cardDiv.css("margin-right","5px");  

//$("gifArea").append(cardDiv);

cardBodyDiv.addClass("card-body");
//cardDiv.append(cardBodyDiv);

cardTextP.addClass("card-text");
cardTextP.text()


   searchParam =  $(this).attr("id");
   console.log(searchParam);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1h8MjUBoqVAQVteGx9dpo6xcZh5sae9l&q="+searchParam + "&limit="+limit+"&offset=0&rating=G&lang=en";
 
    
    $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

  

   

    for (let i=0; i < limit; i++){

        console.log(response);

        let imagePoint = $("<img>");
        let ratingPOint = $("<p></p>");
        
        let newDiv = $("<div></div>");
        newDiv.addClass("divStyle");
       

        imagePoint.attr("src",response.data[i].images.original_still.url);
        imagePoint.attr("class","moveGif"); 
        imagePoint.attr("uniqID",i);
        imagePoint.attr("gifURL",response.data[i].images.original.url);
        imagePoint.attr("stillURL",response.data[i].images.original_still.url);
        
        ratingPOint.text("Rating:"+" "+ response.data[i].rating); 

         imagePoint.attr("id","gifs"); 
    ratingPOint.attr("id","rating");
    $("body").append(newDiv);
    newDiv.append(ratingPOint);
    newDiv.append(imagePoint);


// if (clickTrack % 2 === 0){
//     $("#gifs").remove();
//     $("#rating").remove();
//     $(".divStyle").remove();

   
   

//  $("body").append(newDiv);
//  newDiv.append(ratingPOint);
//         newDiv.append(imagePoint);
    

// } else {
//     $("#gifs2").remove();
//     $("#rating2").remove();
//     $(".divStyle").remove();

//     imagePoint.attr("id","gifs"); 
//     ratingPOint.attr("id","rating");
//     $("body").append(newDiv);
//     newDiv.append(ratingPOint);
//     newDiv.append(imagePoint);
// }


       

      
       


        
        // console.log(response.data[i].images.original_still.url);
        // console.log(response.data[i].images.original.url);
       
    //   $("gifArea").append($("<img>").attr("src",response.data[i].images.original.url));  
    //   $("<img>").attr("class","imageStyles"); 
      //$("gifArea").append(imgs);
    }
    

    //$("gifArea").html(imgs);
    // console.log("The Genre for" +" "+ title + "is: "+response.Genre);
  });
});

});

let clickFlag = true;

$(document).ready(function () {

$(document).on("click", ".moveGif", function(){

  if (clickFlag === true){
      $(this).attr("src",$(this).attr("gifURL"));
      clickFlag = false;
  } else {
    $(this).attr("src",$(this).attr("stillURL"));
    clickFlag = true;

  }

    console.log($(this).attr("gifURL"));
    

    
 });

});






    








