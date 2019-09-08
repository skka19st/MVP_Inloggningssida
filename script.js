// Bygg upp webbsidorna

ByggMenySida();
//ByggInloggadSida();
let LoggainBtnKlick = document.getElementById("btnLoggaIn");
console.log("första klick-lyssnaren gjord");
// event-triggers

// händelsehantering: klickat logga in-knappen
LoggainBtnKlick.addEventListener("click", function() 
{
    console.log("klickat logga in");
    //ta bort meny-sidan från dokumentet(webbsidan)
    document.getElementById("divMenyId").remove();
    ByggInloggadSida();

})

// händelsehantering: klickat logga ut-knappen
//LoggautBtnKlick.addEventListener("click", function() 
// {
//     console.log("klickat logga ut");
//     //ta bort välkomst-sidan från dokumentet(webbsidan)
//     document.getElementById("divInloggadId").remove();
//     ByggMenySida();

// })

// funktion: bygger upp första div-taggen
    // div
    //   fieldset
    //      legend
    //      inmatningsruta
    //      button
function ByggMenySida()
{
    // rubrik
    document.getElementById("rubrikId").innerText = 
                "logga in för att komma vidare";

    // div-tagg
    var kodText = "<div id='divMenyId'></div>";
    document.body.insertAdjacentHTML("beforeend",kodText);

    // inloggningsknappen
    kodText = "<button id='btnLoggaIn'> Logga in </button>";
    document.getElementById("divMenyId").insertAdjacentHTML
                    ("beforeend", kodText)
    console.log("färdig med meny-sidan");
}

function ByggInloggadSida()
{
    console.log("denna borde inte komma ut");
    // rubrik
    document.getElementById("rubrikId").innerText = 
                "Välkommen, du är inloggad";

    // div-tagg
    var kodText = "<div id='divInloggadId'></div>";
    document.body.insertAdjacentHTML("beforeend",kodText);

    // inloggningsknappen
    kodText = "<button id='btnLoggaUt'> Logga ut </button>";
    document.getElementById("divInloggadId").insertAdjacentHTML
                    ("beforeend", kodText)

    // event-trigger
    //let LoggautBtnKlick = document.getElementById("btnLoggaUt");
}

function ByggFelSida()
{

}