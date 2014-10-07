window.onload = app;

function app() {
    "use strict";

    var backGround = document.querySelector("body")
    var progressBar = document.querySelector("#progress")

    // setInterval(function() {
    //     backGround.style["background-color"] = "red"
    // }, 2000);


    function count() {
        var date = new Date();
        // var hour = date.getHours();
        // var minute = date.getMinutes();
        var second = date.getSeconds();
        // var time = hour + ":" + minute + ":" + second;

        var parts = ["getHours", "getMinutes", "getSeconds"];

        var time = parts.map(function(functionName) {
            if (date[functionName]() < 10) {
                return "0" + date[functionName]();
            } else {
                return date[functionName]();
            }
        })

        /**
         * [convertTimeToRGB description]
         * Here we will take the time array, [hour, minute, second]
         * and convert it to RGB.
         * @param  {[type]} range [description]
         * @return {[type]}       [description]
         *
         * Rubber duck description:
         * We want to, for example, take the hour value, date.getHours(),
         * and find what percent of its full value it is. E.g. if
         * the time is 12 o'clock, it is 50% of its full 24 hour value.
         * Once we know this percent, we will multiply it by 255 to get
         * 50% of the RGB value.
         */
        function convertTimeToRGB(time) {
            var range = [24, 60, 60]
            var empty = []
            time.forEach(function(value, index) {
                    empty[index] = Math.round(value / range[index] * 255)
                })
                // console.log(empty.join(", "))
                // empty.join()
            return empty
        }

        function progressFunction(item) {
                item.style["width"] = parseInt(second / 60 * 100) + "%";
            }
 		progressFunction(progressBar)

        var clock = document.querySelector("#clock");
        clock.textContent = time.join(":");
        backGround.style["background-color"] = "rgb(" + convertTimeToRGB(time).join(", ") + ")";
    }

    setInterval(count, 1000)


}
