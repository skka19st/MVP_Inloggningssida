   
// om namnet finns i localStorage ska det visas
var namn = "";
namn = window.localStorage.getItem("MVP_Inloggning_namn");

    if (namn)
    {
        ByggInloggadSida(namn);
    }
    else
    {
        ByggMenySida();
    }

function ByggMenySida()
{  
    // används för att förkorta kod-raderna: 
    var kodText;    
    var taggInUse;   

    // ta bort ev tidigare utskrift
    taggInUse = document.getElementById("helaSidan");
    taggInUse.innerHTML = "";

    // start-tagg som kopplas till första taggen i html-dokumentet
    kodText = "<div id='wrap'></div>";
    taggInUse = document.getElementById("helaSidan");
    taggInUse.insertAdjacentHTML("beforeend",kodText);

    // min rubrikrad
    kodText = "<h2 id='rubrik'>Meny</h2>";
    taggInUse = document.getElementById("wrap");
    taggInUse.insertAdjacentHTML("beforeend",kodText);
 
    // min detaljrad
    kodText = "<div id='divMenyId'>Ange lösenord</div>";
    taggInUse = document.getElementById("wrap");
    taggInUse.insertAdjacentHTML("beforeend",kodText);

    // namn-tagg
    kodText = "<input id='indataNamnId' type='text'></input>";
    taggInUse = document.getElementById("divMenyId");
    taggInUse.insertAdjacentHTML("beforeend", kodText);

    // password-tagg
    kodText = "<input id='indataPasswordId' type='password'></input>";
    taggInUse = document.getElementById("divMenyId");
    taggInUse.insertAdjacentHTML("beforeend", kodText);

    // inloggningsknappen
    kodText = "<button id='btnLoggaIn'> Logga in </button>";
    taggInUse = document.getElementById("divMenyId");
    taggInUse.insertAdjacentHTML("beforeend", kodText);

    // variabel som fångar upp val från skärmen
    var variabelLoggaIn = document.getElementById("btnLoggaIn");
    
    // händelsehantering: klickat logga in-knappen
    variabelLoggaIn.addEventListener("click", function()
    {
        LoggainBtnKlick();
    })
        
    // händelsehantering: klickat logga in-knappen
    function LoggainBtnKlick()
    {
        var namn = document.getElementById("indataNamnId").value;
        var password = document.getElementById("indataPasswordId").value;
        var hardcodeName = "test";
        var hardcodePass = "1234";
            
        // kontroll av inloggning
        if (namn === hardcodeName && password === hardcodePass)
        {   
            // spar i localStorage
            localStorage.setItem("MVP_Inloggning_namn",namn);
            localStorage.setItem("MVP_Inloggning_password",password);
            
            // skifta till sidan för inloggad person
            ByggInloggadSida(namn);
        }
        else
        {
            //visa felsidan
            ByggFelSida(namn);
        }
    }
}

function ByggFelSida(namn)
{
    // ta bort ev tidigare utskrift
    taggInUse = document.getElementById("helaSidan");
    taggInUse.innerHTML = "";

    // start-tagg som kopplas till första taggen i html-dokumentet
    kodText = "<div id='wrap'></div>";
    taggInUse = document.getElementById("helaSidan");
    taggInUse.insertAdjacentHTML("beforeend",kodText);

    // min rubrikrad
    kodText = "<h2 id='rubrik'>Det blev fel</h2>";
    taggInUse = document.getElementById("wrap");
    taggInUse.insertAdjacentHTML("beforeend",kodText);

    // min detaljrad
    kodText = "<div id='divFelId'>Användarid och/eller password är felaktigt</div>";
    taggInUse = document.getElementById("wrap");
    taggInUse.insertAdjacentHTML("beforeend",kodText);
    
    // namn-tagg
    kodText = "<div id='namnFelId'>Du angav användarid </div>";
    taggInUse = document.getElementById("divFelId");
    taggInUse.insertAdjacentHTML("beforeend", kodText);

    taggInUse = document.getElementById("namnFelId");
    taggInUse.insertAdjacentHTML("beforeend", namn);

    // tillbaka-knappen
    kodText = "<button id='btnTillbaka'> Tillbaka till inloggning </button>";
    taggInUse = document.getElementById("wrap");
    taggInUse.insertAdjacentHTML("beforeend", kodText);

    // variabler som fångar upp val från skärmen
    var variabelTillbaka = document.getElementById("btnTillbaka");

    // händelsehantering: klickat tillbaka-knappen
    var variabelTillbaka = document.getElementById("btnTillbaka");

    // event-handler: tillbaka till menyn
    variabelTillbaka.addEventListener("click", function()
    {  
        ByggMenySida();
    })
}  

function ByggInloggadSida(namn)
{
    // ta bort ev tidigare utskrift
    taggInUse = document.getElementById("helaSidan");
    taggInUse.innerHTML = "";

    // start-tagg som kopplas till första taggen i html-dokumentet
    kodText = "<div id='wrap'></div>";
    taggInUse = document.getElementById("helaSidan");
    taggInUse.insertAdjacentHTML("beforeend",kodText);

    // min rubrikrad
    kodText = "<h2 id='rubrik'>Välkommen in</h2>";
    taggInUse = document.getElementById("wrap");
    taggInUse.insertAdjacentHTML("beforeend",kodText);

    // min detaljrad
    kodText = "<div id='divLoggaUtId'></div>";
    taggInUse = document.getElementById("wrap");
    taggInUse.insertAdjacentHTML("beforeend",kodText);
    
    // namn-tagg
    kodText = "<div id='namnId'>Du är inloggad som </div>";
    taggInUse = document.getElementById("divLoggaUtId");
    taggInUse.insertAdjacentHTML("beforeend", kodText);

    taggInUse = document.getElementById("namnId");
    taggInUse.insertAdjacentHTML("beforeend", namn);

    // utloggningsknappen
    kodText = "<button id='btnLoggaUt'> Logga ut </button>";
    taggInUse = document.getElementById("wrap");
    taggInUse.insertAdjacentHTML("beforeend", kodText);

    // variabler som fångar upp val från skärmen
    var variabelLoggaUt = document.getElementById("btnLoggaUt");

    // händelsehantering: klickat logga ut-knappen
    var variabelLoggaUt = document.getElementById("btnLoggaUt");

    // event-handler: logga ut
    variabelLoggaUt.addEventListener("click", function()
    {  
        // tömmer local storage på detta programs data
        localStorage.removeItem("MVP_Inloggning_namn");
        localStorage.removeItem("MVP_Inloggning_password");

        // åter till meny-sidan
        ByggMenySida();
    })
}   
