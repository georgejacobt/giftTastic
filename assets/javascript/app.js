
let buttonName = ["dog", "cat", "mouse", "horse", "elephant", "tiger", "zebra", "skunk"];
let name = "";
let limit = 3;
let searchParam ="dog";

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

$(".anyButton").on("click", function(){

  
   searchParam =  $(this).attr("id");
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
        imagePoint.attr("src",response.data[i].images.original.url);
        imagePoint.attr("class","imageStyles"); 
        imagePoint.attr("id","gifs"); 
        ratingPOint.text("Rating:"+response.data[i].rating);

        $("gifArea").append(ratingPOint);
        $("gifArea").append(imagePoint);
       


        
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





