// Bygg upp webbsidorna
console.log("första");
ByggMenySida();
ByggInloggadSida();

// event-triggers, måste ligga här för att "synas" överallt
let LoggainBtnKlick = document.getElementById("btnLoggaIn");
let LoggautBtnKlick = document.getElementById("btnLoggaUt");


// händelsehantering: klickat logga in-knappen
LoggainBtnKlick.addEventListener("click", function() 
{
    console.log("klickat logga in");

    // gör meny-sidan osynlig
    //document.getElementById("divMenyId").remove();

    //ta bort meny-sidan från dokumentet(webbsidan)
    //document.getElementById("divMenyId").remove();
    //ByggInloggadSida();

})

// händelsehantering: klickat logga ut-knappen
LoggautBtnKlick.addEventListener("click", function() 
{
    console.log("klickat logga ut");
    // knappen blir synlig
    document.getElementById("divInloggadId").setAttribute("hidden","true");
    document.getElementById("divMenyId").setAttribute("hidden","false");
    //ta bort välkomst-sidan från dokumentet(webbsidan)
    //document.getElementById("divInloggadId").remove();
    //ByggMenySida();

})

// funktion: bygger upp första div-taggen
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
    console.log("inloggad på denna sida");

    // document.getElementById("rubrikId").innerText = 
    // "Välkommen, du är inloggad";

    // div-tagg
    var kodText = "<div id='divInloggadId'></div>";
    document.body.insertAdjacentHTML("beforeend",kodText);

    // inloggningsknappen
    kodText = "<button id='btnLoggaUt'> Logga ut </button>";
    document.getElementById("divInloggadId").insertAdjacentHTML
                    ("beforeend", kodText)
    
    // knappen blir synlig
    //document.getElementById("btnLoggaUt").setAttribute("hidden","false");

}

function ByggFelSida()
{

}