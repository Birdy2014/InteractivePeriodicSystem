function createElement(ordnungszahl, size) {
    var element = $("<a></a>");
    element.attr("href", "element.html?currentElementId=" + ordnungszahl);
    let elementLeft = getPositionOfElement(ordnungszahl)[0] * size;
    let elementTop = getPositionOfElement(ordnungszahl)[1] * size;
    element.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " + elementLeft + "px; top: " + elementTop + "px;");
    element.mouseover(function () {
        createInfo(ordnungszahl, size);
    });
    element.mouseleave(function () {
        createLegende(size);
    });

    var elementImg = $("<img></img>");
    elementImg.attr("src", "img/e" + ordnungszahl + ".gif");
    elementImg.attr("style", "height: inherit; width: inherit;");
    elementImg.attr("alt", elements[ordnungszahl - 1][0]);

    element.append(elementImg);
    $("#periodicSystemContainer").append(element);
}

function createInfo(ordnungszahl, size) {
    if ($("#information").length != 0) {
        $("#information").empty();
        $("#information").remove();
    }

    let info = $("<div></div>");
    info.attr("style", "width: " + 8 * size + "px; height: " + 2 * size + "px; position: absolute; left: " + 3 * size + "px; top: " + 0.5 * size + "px; border: 2px solid black;");
    info.attr("id", "information");

    let picture = $("<img></img>");
    picture.attr("src", "img/e" + ordnungszahl + ".gif");
    picture.attr("style", "width: " + (2 * size - 4) + "px; height: " + (2 * size - 4) + "px;");

    let heading = $("<h4></h4>").html(elements[ordnungszahl - 1][0]).attr("style", "position: absolute; left: " + 2.1 * size + "px; top: " + 0.1 * size + "px;");

    let list = $("<ul></ul>").attr("style", "position: absolute; left: " + 2.1 * size + "px; top: " + 0.5 * size + "px;");
    list.append($("<li></li>").html("Kernladungszahl: " + ordnungszahl));
    list.append($("<li></li>").html("Relative Atommasse: " + elements[ordnungszahl - 1][1][0]));
    list.append($("<li></li>").html("Elektronegativität: " + elements[ordnungszahl - 1][1][1]));

    info.append(picture).append(heading).append(list);
    $("#periodicSystemContainer").append(info);
}

function createLegende(size) {
    if ($("#information").length != 0) {
        $("#information").empty();
        $("#information").remove();
    }

    let legende = $("<div></div>");
    legende.attr("style", "width: " + 8 * size + "px; height: " + 2 * size + "px; position: absolute; left: " + 3 * size + "px; top: " + 0.5 * size + "px; border: 2px solid black;");
    legende.attr("id", "information");

    let example = $("<img></img>");
    example.attr("src", "img/example.gif");
    example.attr("style", "width: " + (2 * size - 4) + "px; height: " + (2 * size - 4) + "px;");

    let text = $("<h4></h4>").html("Schraffur: radioaktiv").attr("style", "position: absolute; left: " + 2.1 * size + "px; top: " + 0.1 * size + "px;");

    legende.append(example).append(text);
    $("#periodicSystemContainer").append(legende);

}

function createAcLa(size) {
    let ac1 = $("<img></img>");
    ac1.attr("src", "img/e1001.gif");
    ac1.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " +  2 * size + "px; top: " + 5 * size + "px;");

    let la1 = $("<img></img>");
    la1.attr("src", "img/e2001.gif");
    la1.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " +  2 * size + "px; top: " + 6 * size + "px;");

    let ac2 = $("<img></img>");
    ac2.attr("src", "img/ac.gif");
    ac2.attr("style", "width: " + 2 * size + "px; height: " + size + "px; position: absolute; left: 0px; top: " + 7.1 * size + "px;");

    let la2 = $("<img></img>");
    la2.attr("src", "img/la.gif");
    la2.attr("style", "width: " + 2 * size + "px; height: " + size + "px; position: absolute; left: 0px; top: " + 8.1 * size + "px;");

    ac1.mouseover(function () {
        ac2.attr("style", "width: " + 2 * size + "px; height: " + size + "px; position: absolute; left: 0px; top: " + 7.1 * size + "px; background: orange;");
        ac1.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " +  2 * size + "px; top: " + 5 * size + "px; background: orange;");
    }).mouseleave(function () {
        ac2.attr("style", "width: " + 2 * size + "px; height: " + size + "px; position: absolute; left: 0px; top: " + 7.1 * size + "px; background: none;");
        ac1.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " +  2 * size + "px; top: " + 5 * size + "px; background: none;");
    });

    la1.mouseover(function () {
        la2.attr("style", "width: " + 2 * size + "px; height: " + size + "px; position: absolute; left: 0px; top: " + 8.1 * size + "px; background: orange;");
        la1.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " +  2 * size + "px; top: " + 6 * size + "px; background: orange;");
    }).mouseleave(function () {
        la2.attr("style", "width: " + 2 * size + "px; height: " + size + "px; position: absolute; left: 0px; top: " + 8.1 * size + "px; background: none;");
        la1.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " +  2 * size + "px; top: " + 6 * size + "px; background: none;");
    });

    ac2.mouseover(function () {
        ac1.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " +  2 * size + "px; top: " + 5 * size + "px; background: orange;");
        ac2.attr("style", "width: " + 2 * size + "px; height: " + size + "px; position: absolute; left: 0px; top: " + 7.1 * size + "px; background: orange;");
    }).mouseleave(function () {
        ac1.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " +  2 * size + "px; top: " + 5 * size + "px; background: none;");
        ac2.attr("style", "width: " + 2 * size + "px; height: " + size + "px; position: absolute; left: 0px; top: " + 7.1 * size + "px; background: none;");
    });

    la2.mouseover(function () {
        la1.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " +  2 * size + "px; top: " + 6 * size + "px; background: orange;");
        la2.attr("style", "width: " + 2 * size + "px; height: " + size + "px; position: absolute; left: 0px; top: " + 8.1 * size + "px; background: orange;");
    }).mouseleave(function () {
        la1.attr("style", "width: " + size + "px; height: " + size + "px; position: absolute; left: " +  2 * size + "px; top: " + 6 * size + "px; background: none;");
        la2.attr("style", "width: " + 2 * size + "px; height: " + size + "px; position: absolute; left: 0px; top: " + 8.1 * size + "px; background: none;");
    });

    $("#periodicSystemContainer").append(ac1).append(la1).append(ac2).append(la2);
}

function drawPeriodicSystem() {
    let height = window.innerHeight - 60;

    let size = height / 9.2;

    $("#periodicSystemContainer").attr("style", "position: absolute; top: 60px; height: " + height + "px; left: " + ((window.innerWidth - 18 * size) / 2) + "px");

    for (let i = 1; i <= elements.length; i++) {
        createElement(i, size);
    }
    createAcLa(size);
    createLegende(size);
}

function getPositionOfElement(ordnungszahl) {
    let elementsPos = [ //elementPos[0] = X position in anzahl elementQuadrate, elementPos[1] = Y position, index = Ordnungszahl
        [0, 0, 17, 0, 1, 12, 13, 14, 15, 16, 17, 0, 1, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 7.1, 7.1, 7.1, 7.1, 7.1, 7.1, 7.1, 7.1, 7.1, 7.1, 7.1, 7.1, 7.1, 7.1, 7.1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 8.1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
    ];

    let out = [elementsPos[0][ordnungszahl], elementsPos[1][ordnungszahl]];
    return out;
}