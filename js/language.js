$(document).hide();

$('[lang]').hide(); // hide all lang attributes on start.
$('[lang="es"]').show(); 
$('#language').click(function () { // put onchange event when user select option from select
    var lang = $(this).html(); // decide which language to display using switch case. The rest is obvious (i think)
    switch (lang) {
        case 'English':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'Español':
            $('[lang]').hide();
            $('[lang="es"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="es"]').show();
        }
});

$('#language-mobile').click(function () { // put onchange event when user select option from select
    var lang = $(this).html(); // decide which language to display using switch case. The rest is obvious (i think)
    switch (lang) {
        case 'English':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'Español':
            $('[lang]').hide();
            $('[lang="es"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="es"]').show();
        }
});

function changeLanguage() {
    console.log("test");
    if(document.getElementById("language").innerHTML === "Español") {
        document.getElementById("language").innerHTML = "English";
        document.getElementById("language-mobile").innerHTML = "English";
    }
    else {
        document.getElementById("language").innerHTML = "Español";
        document.getElementById("language-mobile").innerHTML = "Español";
    }
}

function changeLanguageMobile() {
    console.log("test");
    if(document.getElementById("language-mobile").innerHTML !== "Español") {
        document.getElementById("language-mobile").innerHTML = "English";
        document.getElementById("language").innerHTML = "English";
    }
    else {
        document.getElementById("language-mobile").innerHTML = "Español";
        document.getElementById("language").innerHTML = "Español";
    }
}