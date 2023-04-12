var dots = window.setInterval( function() {
    var wait = document.querySelector(".dots");
    if ( wait.innerHTML.length > 2 ) 
        wait.innerHTML = "";
    else 
        wait.innerHTML += ".";
    }, 500);