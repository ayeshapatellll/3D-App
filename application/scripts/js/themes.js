var theme = 'light';

function light_theme() {
    // Change background of some sections to white
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('footer').style.color = 'black';
    document.getElementById('dmenu').style.backgroundColor = 'white';
    document.getElementById('index-top-bar').style.backgroundColor = 'white';
    
    // Change the borders to white and background
    $('#index-top-bar').addClass("bg-white");
    $('.border').removeClass("border-white");
    $('.dashed').removeClass("dashed-white");

    // Go through everything in within the contact id and remove white
    var all = document.querySelectorAll('#content *');
    for (var i=0, max=all.length; i < max; i++) {
        try {all[i].style.color = "";}
        catch(TypeError) {}
    }
}

function dark_theme() {
    // Change background of some sections to white
    document.getElementById('body').style.backgroundColor = '#282a36';
    document.getElementById('footer').style.color = 'white';
    document.getElementById('dmenu').style.backgroundColor = '#282a36';
    document.getElementById('index-top-bar').style.backgroundColor = '#282a36';
    
    // Change the borders to black and background to black
    $('#index-top-bar').removeClass("bg-white");
    $('.border').addClass("border-white");
    $('.dashed').addClass("dashed-white");

    // Go through everything in within the contact id and turn white
    var all = document.querySelectorAll('#content *');
    for (var i=0, max=all.length; i < max; i++) {
        try {all[i].style.color = "white";}
        catch(TypeError) {}
    }
}

// Main switch function
function swap_theme() {
    if (theme == 'light') {
        dark_theme();
        theme = 'dark';
    } else if (theme == 'dark') {
        light_theme();
        theme = 'light';
    }
}
