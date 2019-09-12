 
// börja alltid med en wrap
// div-tagg som ska ligga inne i body-taggen
var kodText = "<div id='wrap'></div>";
document.body.insertAdjacentHTML("afterbegin",kodText);

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
    taggInUse = document.getElementById("wrap");
    taggInUse.innerHTML = "";

    // rubrik och menysida inne i wrapen
    taggInUse = document.getElementById("wrap");
    kodText = "<h2>Meny</h2>";
    kodText += "<div id='meny'></div>";
    taggInUse.insertAdjacentHTML("beforeend",kodText);

    // input för namn och password, logga in-button
    taggInUse = document.getElementById("meny");
    kodText = "<div id='divMenyId'>Ange namn och lösenord</div>";
    kodText += "<input id='namnid' type='text'></input>";
    kodText += "<input id='pword' type='password'></input>";  
    kodText += "<button id='btnLoggaIn'> Logga in </button>";
    taggInUse.insertAdjacentHTML("beforeend", kodText);
   
    // event-handler: logga in
    var eventLoggaIn = document.getElementById("btnLoggaIn");
    eventLoggaIn.addEventListener("click", function()
    {
        var namn = document.getElementById("namnid").value;
        var password = document.getElementById("pword").value;
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
    })
}

function ByggFelSida(namn)
{
    // används för att förkorta kod-raderna: 
    var kodText;    
    var taggInUse; 

    // ta bort ev tidigare utskrift
    taggInUse = document.getElementById("wrap");
    taggInUse.innerHTML = "";
    
    // rubrik och felsida inne i wrapen
    taggInUse = document.getElementById("wrap");
    kodText = "<h2>Felaktigt id/lösen</h2>";
    kodText = kodText + "<div id='felsida'></div>";
    taggInUse.insertAdjacentHTML("beforeend",kodText);
    
    // namn och tillbaka-button
    taggInUse = document.getElementById("felsida");
    kodText = "Du angav användarid " + namn + "  ";
    kodText += "<button id='tillb'> Tillbaka  </button>";
    taggInUse.insertAdjacentHTML("beforeend", kodText);

    // event-handler: tillbaka till menyn
    var eventTillbaka = document.getElementById("tillb");
    eventTillbaka.addEventListener("click", function()
    {  
        ByggMenySida();
    })
}  

function ByggInloggadSida(namn)
{
    // används för att förkorta kod-raderna: 
    var kodText;    
    var taggInUse; 

    // ta bort ev tidigare utskrift
    taggInUse = document.getElementById("wrap");
    taggInUse.innerHTML = "";

    // rubrikrad och visasida inne i wrapen
    taggInUse = document.getElementById("wrap");
    kodText = "<h2 id='rubrik'>Välkommen in</h2>";
    kodText += "<div id='visasida'></div>";
    taggInUse.insertAdjacentHTML("beforeend",kodText);

    // namn och logga ut-button 
    taggInUse = document.getElementById("visasida");
    kodText = "du är inloggad som " + namn + "  ";
    kodText += "<button id='btnLoggaUt'> Logga ut </button>";
    taggInUse.insertAdjacentHTML("beforeend", kodText);

    // event-handler: logga ut
    var eventLoggaUt = document.getElementById("btnLoggaUt");
    eventLoggaUt.addEventListener("click", function()
    {  
        // tar bort användarinfo från local storage 
        localStorage.removeItem("MVP_Inloggning_namn");
        localStorage.removeItem("MVP_Inloggning_password");

        // åter till meny-sidan
        ByggMenySida();
    })
}   
