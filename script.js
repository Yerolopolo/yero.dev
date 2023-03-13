

$.getJSON("https://api.countapi.xyz/hit/yero.dev/visits", function(response) {
    var counterContainer = document.getElementById("counter");
    var count = response.value;
    counterContainer.innerHTML = count;
});

