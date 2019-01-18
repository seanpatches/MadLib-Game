//eslint-disable-next-line
function madlib(){

    var gotNoun1 = document.getElementById('noun1');
    var gotNoun2 = document.getElementById('noun2');
    var gotNoun3 = document.getElementById('noun3');
    var gotNoun4 = document.getElementById('noun4');
    var gotNoun5 = document.getElementById('noun5');
    var gotVerb1 = document.getElementById('verb1');
    var gotVerb2 = document.getElementById('verb2');
    var gotAdjective = document.getElementById('adjective');
    var gotProperNoun = document.getElementById('properNoun');
    var gotPlace = document.getElementById('place');

    //get values by input
    var displayNoun1 = gotNoun1.value;
    var displayNoun2 = gotNoun2.value;
    var displayNoun3 = gotNoun3.value;
    var displayNoun4 = gotNoun4.value;
    var displayNoun5 = gotNoun5.value;
    var displayVerb1 = gotVerb1.value;
    var displayVerb2 = gotVerb2.value;
    var displayAdjective = gotAdjective.value;
    var displayProperNoun = gotProperNoun.value;
    var displayPlace = gotPlace.value;   

///make sentence
    var completedMadLib = 'There once was a ' + displayAdjective + ' ' + displayNoun1 + ' from ' + displayPlace
                         + ', who ' + displayVerb1 + ' all his ' + displayNoun2 + ' in a ' +
                        displayNoun3 + '. But his ' + displayNoun4 + ',' + '' + ' named ' + displayProperNoun +
                         ', ' + displayVerb2 + ' with a ' + displayNoun5 + '.' ;

    
/// reprint

    var reprint = document.getElementById('reprint');
    reprint.textContent = completedMadLib;
}