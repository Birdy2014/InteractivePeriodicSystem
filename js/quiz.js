var questions = [
    ["Welches Metall kann man verzinken?", "Kupfer", "Eisen", "Magnesium", "Silber", 3],
    ["Ein dipolares Molekül entsteht ab einer Elektronegativitätsdifferenz von:", "1.0", "0.25", "0.75", "0.5", 4],
    ["Eine Salzverbindung besteht aus:", "Quarks", "Kationen und Anionen", "Elektronen und Positronen", "Wasserstoff und Helium", 2],
    ["Welche gemeinsamen Eigenschaften besitzen alle Edelgase?", "Sie sind reaktionsträge und stabil", "Sie reagieren heftig mit Wasser unter Wasserstoff- und Laugenbildung", "Sie sind hochgiftig", "Sie leuchten bei -10°C", 1],
    ["Welche Aussage über das Element Technetium stimmt nicht?", "Es war das erste künstlich hergestellte Element", "Alle seiner Isotope sind radioaktiv", "Es besitzt die Ordnungszahl 47", "Es wurde früher auch Masurium genannt", 3],
    ["Was passiert, wenn man 130kg Cäsium und 19kg Fluor zusammengibt?", "Es entsteht Wasser", "Es gibt eine Explosion", "Es gibt eine Kernspaltung", "Das Cäsium wird gasförmig", 2],
    ["Welches ist das am seltensten natürlich auf der Erde vorkommende Element?", "Gold", "Platin", "Astat", "Xenon", 3],
    ["Die Lanthanoide stehen in Periode:", "5", "8", "6", "7", 3],
    ["Die Hauptgruppennummer gibt an, ", "wie viele Neutronen im Kern vorhanden sind", "wie viele Elektronen in der Valenzschale vorhanden sind", "zu welchem anderen Element ein Element zerfällt", "wie die Protonen im Kern geordnet sind", 2],
    ["Ein Uran-Atom des Isotops U-135 hat die Atommasse von 135u. Wie heißt ein Element, dessen Atome nur etwa ein Fünftel eines Uran-Atoms wiegen?", "Sauerstoff", "Aluminium", "Palladium", "Wasserstoff", 2],
    ["Ein Helium-Atom des Isotops He-4 besitzt", "2 Elektronen, 2 Protonen und 2 Neutronen", "2 Elektronen, 2 Protonen und 1 Neutron", "4 Elektronen, 4 Protonen und 4 Neutronen", "2 Elektronen und 2 Neutronen", 1],
    ["Fluor steht in", "der 4. Periode der 7. Nebengruppe", "der 2. Periode der 7. Hauptgruppe", "der 6.Periode der 8. Hauptgruppe", "der 6. Periode der 7. Nebengruppe", 2],
    ["Was ist eine Redoxreaktion?", "Ein Synonym für eine exotherme Reaktion", "Eine Reaktion, bei der ein Gas direkt in einen Feststoff übergeht", "eine Säure-Base-Reaktion", "Eine Reaktion, bei der eine Oxidation und eine Reduktion stattfindet", 4],
    ["Welche Aussage trifft zu ?  140g Kaliumiodid werden in 100 ml Wasser gegeben.", "Die Lösung erwärmt sich auf 97°C.", "Das Salz dissoziert in K- und I+.", "Die Lösung kühlt auf bis zu -12°C ab", "Durch die Reaktion der Kalium-Ionen mit dem Wasser entsteht hochexplosives Kaliumoxid", 3],
    ["Welche Aussage zu Oxidation trifft zu ?", "Eine Oxidation ist immer eine Reaktion mit Sauerstoff.", "Eine Oxidation ist die Abgabe von Elektronen.", "Eine Oxidation ist die Aufnahme von Elektronen.", "Eine Oxidation ist die Trennung eines Metalls von Sauerstoff.", 2]
];

var currentQuestionId = getQuestionId();
var URL = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + "/";

function submit() {
    var radios = document.getElementsByName("answer");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            window.sessionStorage.setItem(currentQuestionId.toString(), i + 1);
            if (questions[parseInt(currentQuestionId) + 1] != undefined) {
                window.location.href = URL + "quiz.html?currentQuestionId=" + (parseInt(currentQuestionId) + 1);
            } else {
                window.location.href = URL + "result.html";
            }
        }
    }
}

function load() {
    if (currentQuestionId == null) window.location.href = URL + "quiz.html?currentQuestionId=0";
    document.getElementById("ueberschrift").innerHTML = "Frage " + (parseInt(currentQuestionId) + 1);
    document.getElementById("frage").innerHTML = questions[currentQuestionId][0];
    document.getElementById("labelAnswer1").innerHTML = questions[currentQuestionId][1];
    document.getElementById("labelAnswer2").innerHTML = questions[currentQuestionId][2];
    document.getElementById("labelAnswer3").innerHTML = questions[currentQuestionId][3];
    document.getElementById("labelAnswer4").innerHTML = questions[currentQuestionId][4];
}

function getQuestionId() {
    if (location.search == "") return null;
    var queryString = location.search.substring(1);
    var paare = queryString.split("&");
    if (paare[0].split("=")[0] == "currentQuestionId") {
        return paare[0].split("=")[1];
    } else {
        return null;
    }
}

function loadResult() {
    var text = "";
    var anzahlRichtig = 0;
    var anzahlFalsch = 0;
    for (var i = 0; i < questions.length; i++) {
        if (window.sessionStorage.getItem(i.toString()) == null) {
            text += "<strong>Frage " + (i + 1) + ": n/a. </strong><br>";
        } else if (window.sessionStorage.getItem(i.toString()) == questions[i][5]) {
            text += "<strong>Frage " + (i + 1) + ": richtig.</strong> Frage: " + questions[i][0] + "<br> Antwort: " + questions[i][window.sessionStorage.getItem(i.toString())] + "<br>";
            anzahlRichtig++;
        } else {
            text += "<strong>Frage " + (i + 1) + ": falsch.</strong> Frage: " + questions[i][0] + "<br> Gewählte Antwort: " + questions[i][window.sessionStorage.getItem(i.toString())] + "<br> Richtige Antwort: " + questions[i][questions[i][5]] + "<br>";
            anzahlFalsch++;
        }
    }

    text += "<strong style='color: red'>Es sind " + anzahlRichtig + " Antworten richtig und " + anzahlFalsch + " Antworten falsch.</strong>";
    document.getElementById("text").innerHTML = text;
}

function restart() {
    for (var i = 0; i < questions.length; i++) {
        window.sessionStorage.removeItem(i.toString());
    }
    window.location.href = URL + "quiz.html?currentQuestionId=0";
}