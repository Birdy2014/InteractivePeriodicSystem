var img;
function load() {
    var currentElementId = getElementId();
    var URL = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + "/";
    var foundElement = false;
    if (currentElementId == null) {
        window.location.href = URL + "index.html";
    }
    for (var i = 1; i <= elements.length; i++) {
        var number;
        if (i < 84 && i != 43 && i != 61 || (i > 88 && i < 89)) {
            switch (parseInt(i.toString().length)) {
                case 1:
                    number = "00" + i;
                    break;
                case 2:
                    number = "0" + i;
                    break;
                case 3:
                    number = i;
                    break;
                default:
                    number = i;
                    console.warn("Error. parseInt(i.toString().length: " + parseInt(i.toString().length));
            }
            elements[i - 1][2] = "http://www.seilnacht.com/Lexikon/" + number + "pse2.JPG";
        } else {
            elements[i - 1][2] = "http://www.seilnacht.com/Lexikon/radioak.gif";
        }
    }
    if (currentElementId <= elements.length) {
        foundElement = true;
        console.debug("Found element " + currentElementId + " " + elements[currentElementId - 1][0]);
        preloadAllPictures();
        drawSite(currentElementId);
    }
    if (!foundElement) {
        console.debug("Can't find Element " + currentElementId);
        document.getElementById("ueberschrift").innerHTML = "Element " + currentElementId + " kann nicht gefunden werden.";
        document.getElementById("title").innerHTML = "Element " + currentElementId + " kann nicht gefunden werden.";
    }
}

function getElementId() {
    if (location.search == "") return null;
    var queryString = location.search.substring(1);
    var paare = queryString.split("&");
    if (paare[0].split("=")[0] == "currentElementId") {
        return paare[0].split("=")[1];
    } else {
        return null;
    }
}

function drawSite(currentElementId) {
    document.getElementById("title").innerHTML = elements[currentElementId - 1][0];
    document.getElementById("ueberschrift").innerHTML = elements[currentElementId - 1][0];
    document.getElementById("Ordungszahl").innerHTML = "Ordnungszahl: " + currentElementId;
    document.getElementById("Masse").innerHTML = "Masse: " + elements[currentElementId - 1][1][0] + "u";
    document.getElementById("Elektronegativität").innerHTML = "Elektronegativität: " + elements[currentElementId - 1][1][1];
    document.getElementById("ElektronenKonfiguration").innerHTML = "Elektronenkonfiguration: " + elements[currentElementId - 1][1][2];
    document.getElementById("Schmelzpunkt-Siedepunkt").innerHTML = "Schmelzpunkt/Siedepunkt: " + elements[currentElementId - 1][1][3];
    document.getElementById("picture").setAttribute("src", elements[currentElementId -1][2]);
    console.debug("Picture URL = " + elements[currentElementId - 1][2]);
    document.getElementById("text").innerHTML = elements[currentElementId - 1][3];
    document.getElementById("picture").setAttribute("alt", "Can't find picture URL: " + elements[currentElementId - 1][2]);
    document.getElementById("source").innerHTML = "https://de.wikipedia.org/wiki/" + (elements[currentElementId - 1][0] == "Titan" ? elements[currentElementId - 1][0] + "_(Element)" : elements[currentElementId - 1][0]);
    document.getElementById("source").setAttribute("href", "https://de.wikipedia.org/wiki/" + (elements[currentElementId - 1][0] == "Titan" ? elements[currentElementId - 1][0] + "_(Element)" : elements[currentElementId - 1][0]));
}

function preloadPicture(pictureURL) {
    img = new Image();
    img.src = pictureURL;
    return checkPictureComplete();
}

function preloadAllPictures() {
    var progressBar = document.createElement("div");
    var progress = document.createElement("div");
    progressBar.width = "100%";
    progress.width = "0%";
    document.getElementById("ueberschrift").appendChild(progressBar);
    progressBar.appendChild(progress);
    for(var i = 0; i < elements.length; i++) {
        preloadPicture(elements[i][2]);
        console.debug("Loaded " + elements[i][2]);
        progress.width = elements.length / 100 * i + "%";
    }
    progressBar.removeChild(progress);
    document.getElementById("ueberschrift").removeChild(progressBar);
}

function checkPictureComplete() {
    if(img.complete == false) {
        window.setTimeout(checkPictureComplete, 100);
    } else {
        console.debug("img.complete is " + img.complete);
        return true;
    }
}