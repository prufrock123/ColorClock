window.onload = app;

function app() {
    "use strict";

    // var backGround = document.querySelector("body")

    // setInterval(function() {
    //     backGround.style["background-color"] = "red"
    // }, 2000);


    function count() {
        var date = new Date();
        // var hour = date.getHours();
        // var minute = date.getMinutes();
        // var second = date.getSeconds();
        // var time = hour + ":" + minute + ":" + second;

        var parts = ["getHours", "getMinutes", "getSeconds"];

        var time = parts.map(function(functionName) {
            if (date[functionName]() < 10) {
                return "0" + date[functionName]();
            } else {
                return date[functionName]();
            }
        })

        var clock = document.querySelector("#clock");
        clock.textContent = time.join(":");
    }

    setInterval(count, 1000)
}
