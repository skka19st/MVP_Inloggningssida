// Bygg upp webbsidorna
ByggMenySida();
ByggInloggadSida();
console.log(localStorage);

// om namnet finns i localStorage ska det visas
var namn = "";
namn = window.localStorage.getItem("MVP_Inloggning_namn");
console.log("inläst data: " + namn);

if (namn)
{
    console.log("namn fanns i localStorage");
    VisaInloggad();
}
else
{
    console.log("namn fanns inte i localStorage");
    VisaMeny();
}

// event-triggers, måste ligga här för att "synas" överallt
let LoggainBtnKlick = document.getElementById("btnLoggaIn");
let LoggautBtnKlick = document.getElementById("btnLoggaUt");


// händelsehantering: klickat logga in-knappen
LoggainBtnKlick.addEventListener("click", function() 
{
    var namn = "test";
    var password = "1234";

    // kontroll av inloggning
    if (namn==="test" && password==="1234")
    {        
    // spar i localStorage
    localStorage.setItem("MVP_Inloggning_namn",namn);
    localStorage.setItem("MVP_Inloggning_password",password);
    console.log(localStorage);

    // skifta till sidan för inloggad person
    VisaInloggad();
    }
    else
    {
        //visa felsidan

    }
})

// händelsehantering: klickat logga ut-knappen 
LoggautBtnKlick.addEventListener("click", function() 
{
    // tömmer local storage på detta programs data
    localStorage.removeItem("MVP_Inloggning_namn");
    localStorage.removeItem("MVP_Inloggning_password");
    console.log(localStorage);
    
    // skifta till meny-sidan
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
                "Logga in för att komma vidare";

    // göm utloggnings-knappen
    var knappen = document.getElementById("divLoggaUtId");
    knappen.removeAttribute("display");
    knappen.setAttribute("hidden","true"); 

    // visa logga in-knappen (ta bort non-display)
    knappen = document.getElementById("divMenyId");
    knappen.removeAttribute("hidden");
    knappen.setAttribute("display","true"); 
}

// funktion: visa välkommen-sidan
function VisaInloggad()
{
    // rubrik
    document.getElementById("rubrikId").innerText = 
                "Välkommen, du är inloggad";

    // används för att förkorta kod-raderna: 
    var kodText;
    var knappen;                

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