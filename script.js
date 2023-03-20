

$.getJSON("https://api.countapi.xyz/hit/yero.dev/visits", function(response) {
    var counterContainer = document.getElementById("counter");
    var count = response.value;
    counterContainer.innerHTML = count;
});



    


document.addEventListener("DOMContentLoaded", function () { 

  var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "../streamstatus", false);
    rawFile.send(null);
    var allText = rawFile.responseText;



  var twitchdiv = document.getElementById("twitch-div")

  if(allText == 'live'){
    twitchdiv.style.display = "inline";
  }
  
  
});



  
  
