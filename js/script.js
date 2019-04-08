// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var userInput = $("#search-term").val();

    var requesturl = "https://api.giphy.com/v1/gifs/search?q=" + userInput +"&rating=pg&api_key=dc6zaTOxFJmzC";
    
    $.ajax({
      url: requesturl,
      method: "GET",
      success: function(response) {
           var pic_url = response.data[0].images.original.url;
           $('.gallery').append('<img src=' + pic_url + '>');
      },
    }); 
  
  

});