// Bygg upp webbsidorna
ByggMenySida();
ByggInloggadSida();

// är personen redan inloggad?
if (9===9)
{    
    VisaInloggad();
}
else
{
    VisaMeny();
}

// event-triggers, måste ligga här för att "synas" överallt
let LoggainBtnKlick = document.getElementById("btnLoggaIn");
let LoggautBtnKlick = document.getElementById("btnLoggaUt");


// händelsehantering: klickat logga in-knappen
LoggainBtnKlick.addEventListener("click", function() 
{
    VisaInloggad();
})

// händelsehantering: klickat logga ut-knappen 
LoggautBtnKlick.addEventListener("click", function() 
{
    VisaMeny();
})

// funktion: visa meny-sidan
function VisaMeny()
{
    // används för att förkorta kod-raderna: 
    var kodText;
    var knappen; 

    // rubrik
    document.getElementById("rubrikId").innerText = 
                "logga in för att komma vidare";

    // göm utloggnings-knappen
    var knappen = document.getElementById("divLoggaUtId");
    knappen.removeAttribute("display");
    knappen.setAttribute("hidden","true"); 

    // visa logga in-knappen (ta bort non-display)
    knappen = document.getElementById("divMenyId");
    knappen.removeAttribute("hidden");
    knappen.setAttribute("display","true"); 
}

// funktion: visa sida för inloggad person
function VisaInloggad()
{
    // används för att förkorta kod-raderna: 
    var kodText;
    var knappen; 

    // rubrik
    document.getElementById("rubrikId").innerText = 
                "Välkommen, du är inloggad";

    // göm logga in-knappen  
    knappen = document.getElementById("divMenyId"); 
    knappen.removeAttribute("display");
    knappen.setAttribute("hidden","true"); 

    // visa utloggnings-knappen (ta bort non-display)
    knappen = document.getElementById("divLoggaUtId");
    knappen.removeAttribute("hidden");
    knappen.setAttribute("display","true"); 
}

// funktion: bygger upp första div-taggen
function ByggMenySida()
{
    // används för att förkorta kod-raderna: 
    var kodText;
    var knappen; 

    // div-tagg
    kodText = "<div id='divMenyId'></div>";
    document.body.insertAdjacentHTML("beforeend",kodText);

    // inloggningsknappen
    kodText = "<button id='btnLoggaIn'> Logga in </button>";
    knappen = document.getElementById("divMenyId");
    knappen.insertAdjacentHTML("beforeend", kodText)

    knappen.setAttribute("display","true"); 
}

function ByggInloggadSida()
{
    // används för att förkorta kod-raderna: 
    var kodText;
    var knappen; 

    // div-tagg
    kodText = "<div id='divLoggaUtId'></div>";
    document.body.insertAdjacentHTML("beforeend",kodText);

    // inloggningsknappen
    kodText = "<button id='btnLoggaUt'> Logga ut </button>";
    knappen = document.getElementById("divLoggaUtId");
    knappen.insertAdjacentHTML("beforeend", kodText);

    knappen.setAttribute("hidden","true"); 
 }

function ByggFelSida()
{

}