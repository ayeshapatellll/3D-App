// Adapted from example code 'benskitchen.com' (kept reference from lab work)

var spinning = false;

// Spins on Y axis
function spinY() {
    stopRotation();
    spinning = true;
    document.getElementById('model__YRotationTimer').setAttribute('enabled', spinning.toString());
}

// Spins on X axis
function spinX() {
    stopRotation();
    spinning = true;
    document.getElementById('model__XRotationTimer').setAttribute('enabled', spinning.toString());
}

// Spins on Z axis
function spinZ() {
    stopRotation();
    spinning = true;
    document.getElementById('model__ZRotationTimer').setAttribute('enabled', spinning.toString());
}

// Stop rotation
function stopRotation() {
    if (spinning) {
        spinning = false;
        document.getElementById('model__XRotationTimer').setAttribute('enabled', spinning.toString());
        document.getElementById('model__YRotationTimer').setAttribute('enabled', spinning.toString());
        document.getElementById('model__ZRotationTimer').setAttribute('enabled', spinning.toString());
    }
}

// Set light vars
var headlightOn = false;
var omniOn = true;
var targetOn = false;

// Resets light
function resetLight() {

    // Sets all to true to be reset to false in function runs
    headlightOn = true;
    omniOn = true;
    targetOn = true;
    
    // Runs all functions to set false
    target();
    headlight();
    omni();
    
    // Sets omni to true
    omni()
}

// Turn on or off headlight
function headlight() {
    headlightOn = !headlightOn;
    document.getElementById('model__headlight').setAttribute('headlight', headlightOn.toString());
}

// Turn on or off omni
function omni() {
    omniOn = !omniOn;
    if(omni == false) {
        target = false;
    }
    possibleLights = ["LA_Light", "LA_Light_001", "LA_Light_002", "LA_Light_003"]

    for (light = 0; light < possibleLights.length; light++) {
        try {
            document.getElementById('model__' + possibleLights[light]).setAttribute('intensity', 1 * omniOn);
        } catch (TypeError) {}
    }
}

// Turn on or off target
function target() {
    if (omniOn == false) {
        omniOn = true;
        omni();

        targetOn = !targetOn;
        document.getElementById('model__LA_Light').setAttribute('intensity', 1 * targetOn);
    }
}

//
// Change camera view
//

function cameraFront() {
    document.getElementById('model__CA_front').setAttribute('bind', 'true');
}

function cameraBack() {
    document.getElementById('model__CA_back').setAttribute('bind', 'true');
}

function cameraLeft() {
    document.getElementById('model__CA_left').setAttribute('bind', 'true');
}

function cameraRight() {
    document.getElementById('model__CA_right').setAttribute('bind', 'true');
}

function cameraTop() {
    document.getElementById('model__CA_top').setAttribute('bind', 'true');
}

function cameraBottom() {
    document.getElementById('model__CA_bottom').setAttribute('bind', 'true');
}

function wireFrame() {
    var e = document.getElementById('theModel');
    e.runtime.togglePoints(true);
}

// Changes texture of model through loading the file as a base64 string
function readFile() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.addEventListener("load", function (e) {
            document.getElementById('model__IMG_Texture').setAttribute('url', e.target.result)
        });
        file.readAsDataURL(this.files[0]);
    }
}

// Calls readFile when a new file is added to the file input
document.getElementById("textureInput").addEventListener("change", readFile);
