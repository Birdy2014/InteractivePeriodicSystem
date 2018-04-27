var yAxisOffset = 2;

createSpecialSquare(1, 5, 5, 5 + yAxisOffset); //First Element
createSpecialSquare(2, 5, 90, 5 + yAxisOffset); // Second One

var ID = 3;
var heightE = 15 + yAxisOffset;
var arr = [5, 10, 65, 70, 75, 80, 85, 90];
for(var i = 0; i < 2; i++){
    for(var x1 = 0; x1 < 8; x1++){
        createSpecialSquare(ID, 5, arr[x1], heightE); // 2nd and 3rd Period
        ID++;
    }
    heightE += 10;
}

ID = 19;
heightE = 35 + yAxisOffset;
for(var y = 0; y < 2; y++) {
    var x = 5;
    for (i = 0; i < 18; i++) {
        createSpecialSquare(ID, 5, x, heightE);  // 4th 5th ones
        ID++;
        x += 5;
    }
    heightE += 10;
}
x = 5;
for(i = 0; i < 2; i++){
    createSpecialSquare(ID, 5, x, heightE);  //Cs and Ba
    ID++;
    x += 5;
}
heightE += 22;
x = 15;
for(i = 0; i < 15;i++){
    createSpecialSquare(ID, 5, x, heightE);  //Lanthanoids
    ID++;
    x += 5;
}
heightE = 55 + yAxisOffset;
x = 20;
for(i = 0; i < 15; i++){
    createSpecialSquare(ID, 5, x, heightE); // 6th Period end
    ID++;
    x += 5;
}
x = 5;
heightE += 10;
for(i = 0; i < 2; i++){
    createSpecialSquare(ID, 5, x, heightE); // Fr and Ra
    ID++;
    x += 5;
}
heightE += 22;
x = 15;
for(i = 0; i < 15;i++){
    createSpecialSquare(ID, 5, x, heightE); //Actinoids
    ID++;
    x += 5;
}
heightE = 65 + yAxisOffset;
x = 20;
for(i = 0; i < 15; i++){
    createSpecialSquare(ID, 5, x, heightE); // 7th Period end
    ID++;
    x += 5;
}
heightE = 77 + yAxisOffset;
createBox(5, heightE, document.getElementById("e1").style.height.toString(), 10, "gray", "la");
createBox(5, heightE + 10, document.getElementById("e1").style.height.toString(), 10, "gray", "ac");
var la = document.getElementById("la");
var ac = document.getElementById("ac");
var img = document.createElement("img");
img.src = "img/la.gif";
img.alt = "la.gif";
img.style.height = "100%";
img.style.width = "100%";
la.appendChild(img);
var img2 = document.createElement("img");
img2.src = "img/ac.gif";
img2.alt = "ac.gif";
img2.style.height = "100%";
img2.style.width = "100%";
ac.appendChild(img2);
la.style.background = "none";
ac.style.background = "none";

createSpecialSquare("1001", 5, 15, 55 + yAxisOffset); // Empty Ones
createSpecialSquare("2001", 5, 15, 65 + yAxisOffset);
document.getElementById("e1001").style.background = "none";
document.getElementById("e2001").style.background = "none";



for(i = 1; i < 119; i++){
        mouseStuff("e" + i);
}

for(var inc = 1; inc < 119; inc++){
	addImg("e" + inc);
}

addImg("e1001");
addImg("e2001");


var el = document.getElementById("e1001");
el.onmouseover = function () {document.getElementById("la").style.background = "orange"; el.style.background = "orange"};
el.onmouseout = function () {document.getElementById("la").style.background = "none"; el.style.background = "none"};

document.getElementById("la").onmouseover = function () {el.style.background = "orange"; document.getElementById("la").style.background = "orange"};
document.getElementById("la").onmouseout = function () {el.style.background = "none"; document.getElementById("la").style.background = "none"};

var el2 = document.getElementById("e2001");
el2.onmouseover = function () {document.getElementById("ac").style.background = "orange"; el2.style.background = "orange"};
el2.onmouseout = function () {document.getElementById("ac").style.background = "none"; el2.style.background = "none"};

document.getElementById("ac").onmouseover = function () {el2.style.background = "orange"; document.getElementById("ac").style.background = "orange"};
document.getElementById("ac").onmouseout = function () {el2.style.background = "none"; document.getElementById("ac").style.background = "none"};

createE();

function mouseStuff(id) {
    var element = document.getElementById(id);
    element.onmouseover = function () {addW(element.id)};
    element.onmouseout = function () {killW()};
    element.onclick = function () {window.location.href = "element.html?currentElementId=" + id.substring(1)};
}
 function doCube(id){
     var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
     var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
     var x = document.getElementById(id);
     var d = x.style.width.toString().substring(0, x.style.width.toString().length - 1);
     x.style.height = (width / 100 * d).toString() + "px";

 }

function createSpecialSquare(end, percent, left, top){
    var c = document.createElement("span");
    c.style.width = percent + "%";
    c.style.position = "absolute";
    c.style.background = end % 2 === 0 ? "red" : "blue";
    c.id = "e" + end;
    c.style.left = left + "%";
    c.style.top = top + "%";
    c.style.cursor = "pointer";
    document.body.appendChild(c);
    doCube("e" + end);
}
function addImg(id){
	var xy = document.getElementById(id);
	var img = document.createElement("img");
    img.src = "img/" + id + ".gif";
    //img.alt = "Here would be: " + id;
    if(id != "e1001" && id != "e2001")
        img.alt = elements[id.substring(1, id.length) - 1][0];
    else
        img.alt = "Here would be: " + id;
    img.style.position = "relative";
    img.style.height = "100%";
    img.style.width = "100%";
    xy.appendChild(img);
}
function addW(id) {
    killE();
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = "20%";
    div.style.width = "40%";
    div.style.left = "20%";
    div.style.top = "10%";
    div.style.background = "white";
    div.id = "sWindow";
    div.style.border = "solid grey";
    document.body.appendChild(div);
    var img = document.createElement("img");
    img.src = "img/" + id + ".gif";
    img.alt = "Here would be " + id;
    img.position = "absolute";
    img.style.height = "100%";
    div.appendChild(img);
    var parentHeight = img.parentNode.style.height.toString();
    parentHeight = parentHeight.substring(0, parentHeight.length - 1);
    var bodyheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    img.style.width = (bodyheight / 100) * parentHeight + "px";

    var name = document.createElement("li");
    var list = document.createElement("ul");
    var mass = document.createElement("li");
    var protons = document.createElement("li");
    var empty = document.createElement("br");
    var electronegativitiy = document.createElement("li");
    var pos = document.createElement("li");
    protons.innerHTML = "Kernladungszahl: " + id.substring(1);
    mass.innerHTML = "Relative Atommasse: " + elements[id.substring(1) - 1][1][0] + " u";
    electronegativitiy.innerHTML = "Elektronegativität: " + elements[id.substring(1) - 1][1][1];
    pos.innerHTML = "Position: " + solveGroup(getGroup(id)) + ", " + getPeriod(id) + ". Periode";
    list.appendChild(name);
    list.appendChild(empty);
    list.appendChild(protons);
    list.appendChild(mass);
    list.appendChild(electronegativitiy);
    list.appendChild(pos);
    list.style.position = "absolute";
    list.style.left = img.style.width;
    list.style.top = "-4%";
    name.style.listStyle = "none";
    name.style.fontSize = "200%";
    name.innerHTML = elements[id.substring(1) - 1][0];
    div.appendChild(list);
}
function killW() {
    var toKill = document.getElementById("sWindow");
    toKill.parentNode.removeChild(toKill);
    createE();
}
function createE(){
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = "20%";
    div.style.width = "40%";
    div.style.left = "20%";
    div.style.top = "10%";
    div.style.background = "white";
    div.id = "example";
    div.style.border = "solid grey";
    document.body.appendChild(div);
    var img = document.createElement("img");
    img.src = "img/example.gif";
    img.alt = "Not there";
    img.position = "absolute";
    img.style.height = "100%";
    div.appendChild(img);
    var parentHeight = img.parentNode.style.height.toString();
    parentHeight = parentHeight.substring(0, parentHeight.length - 1);
    var bodyheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    img.style.width = (bodyheight / 100) * parentHeight + "px";

    var title = document.createElement("li");
    var list = document.createElement("ul");
    var text = document.createElement("li");
    var text1 = document.createElement("li");
    var empty = document.createElement("br");
    var empty1 = document.createElement("br");
    list.appendChild(title);
    list.appendChild(empty);
    list.appendChild(text);
    list.appendChild(empty1);
    list.appendChild(text1);
    list.style.position = "absolute";
    list.style.left = img.style.width;
    list.style.top = "0%";
    title.style.listStyle = "none";
    title.style.fontSize = "200%";
    text.style.fontSize = "100%";
    text1.style.fontSize = "100%";
    title.style.textDecoration = "underline";
    title.innerHTML = "Schraffur";
    text.innerHTML = "Vorhanden: Radioaktiv";
    text1.innerHTML = "Fehlt: Nicht Radioaktiv";
    /*list.style.listStyleImage = "url(../img/LogoSmall.png)";
    list.style.listStylePosition = "inside";*/
    list.style.borderRight = "2px solid grey";
    list.style.paddingRight = "4%";
    list.style.paddingTop = "1%";
    list.style.height = "97%";
    list.style.margin = "0%";
    div.appendChild(list);

}
function killE() {
    var toKill = document.getElementById("example");
    toKill.parentNode.removeChild(toKill);
}

function createBox(left, top, height, width, background, id){
    var element = document.createElement("span");
    element.style.position = "absolute";
    element.style.height = height;
    element.style.width = width + "%";
    element.style.left = left + "%";
    element.style.top = top + "%";
    element.style.background = background;
    element.id = id;
    document.body.appendChild(element);
}
function getGroup(id) {
    var p = id.substring(1);
    var g1 = [1, 3, 11, 19, 37, 55, 87];
    var g2 = [4, 12, 20, 38, 56, 88];
    var g3 = [5, 13, 31, 49, 81, 113];
    var g4 = [6, 14, 32, 50, 82, 114];
    var g5 = [7, 15, 33, 51, 83, 115];
    var g6 = [8, 16, 34, 52, 84, 116];
    var g7 = [9, 17, 35, 53, 85, 117];
    var g8 = [2, 10, 18, 36, 54, 86, 118];

    var n1 = [29, 47, 79, 111];
    var n2 = [30, 48, 80, 112];
    var n3 = [21, 39];
    var n4 = [22, 40, 72, 104];
    var n5 = [23, 41, 73, 105];
    var n6 = [24, 42, 74, 106];
    var n7 = [25, 43, 75, 107];
    var n8 = [26, 44, 76, 108, 27, 45, 77, 109, 28, 46, 78, 110];

    var array = [g1, g2, g3, g4, g5, g6, g7, g8];

   for(var i = 0; i < array.length; i++){
       if(contains(p, array[i])){
           return "h" + (i + 1);
       }
   }
   array = [n1, n2, n3, n4, n5, n6, n7, n8];

    for(i = 0; i < array.length; i++){
        if(contains(p, array[i])){
            return "n" + (i + 1);
        }
    }
    if(p > 56 && p < 72)return "n3";
    if(p > 88 && p < 104)return"n3";
}

function getPeriod(id) {
    var num = parseInt(id.substring(1));
    if (num < 3) return 1;
    else if (num < 11) return 2;
    else if (num < 19) return 3;
    else if (num < 37) return 4;
    else if (num < 55) return 5;
    else if (num < 87) return 6;
    else return 7;
}


function contains(x, arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == x)return true;
    }
    return false;
}
function solveGroup(string){
    var type = string.toString().substring(0, 1);
    var num = string.toString().substring(1);
    return num + ". " + (type === "n" ? "Nebengruppe" : "Hauptgruppe");
}