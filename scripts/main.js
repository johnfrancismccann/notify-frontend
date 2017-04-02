window.onload = function () {
    var os = navigator.platform;
    if (os.indexOf("Mac") != -1) {
        var ralewayElements = document.getElementsByClassName("raleway");
        for (var i=0; i < ralewayElements.length; i++) {
            ralewayElements[i].style.fontWeight = 500;
        }
    }
};
