// Game Web Development Kit - Version 1.0
// Function stuff
function CheckIfVarIsCertainClass(v,classname) {
    let result;
    if (typeof v == "function") {
        let parsedstring = v.toString();
        if (parsedstring.replace(/\[|\]/,"").replace("class","").replace(" ",""))
            result = true
        else
            result = false;
    } else {
        result = false;
    }
    if (!result)
        return Error("Result of function \"CheckIfVarIsCertainClass()\" is null or undefined.");
    return result;
}
// Vector stuff
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
        forward = () => { return new Vector2(this.x, this.y+1) }

        down = () => { return new Vector2(this.x, this.y-1) }

        left = () => { return new Vector2(this.x-1, this.y) }

        right = () => { return new Vector2(this.x+1, this.y) }
}
class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    forward = () => { return new Vector3(this.x, this.y, this.z+1) }
    backward = () => { return new Vector3(this.x, this.y, this.z-1) }
    left = () => { return new Vector3(this.x-1, this.y, this.z) }
    right = () => { return new Vector3(this.x+1, this.y, this.z) }
    up = () => { return new Vector3(this.x, this.y+1, this.z) }
    down = () => { return new Vector3(this.x, this.y-1, this.z) }
}

function getmouseposincanvas(canvas) {
    let returnedx;
    let returnedy;
    function cnvs_getCoordinates(e) {
        x = e.clientX;
        y = e.clientY;
        returnedx = x;
        returnedy = y;
    }

    function cnvs_clearCoordinates() {
        returnedx = "";
        returnedy = "";
    }
    let typecanvas = `${typeof canvas}`;
    if (typecanvas[0].toLowerCase == "a" || "e" || "i" || "o" || "u") { // grammar lol
        `an ${typeof canvas}`
    } else {
        typecanvas = `a ${typeof canvas}`
    }
    if (typeof canvas == HTMLCanvasElement) {
        return new Vector2(returnedx,returnedy)
    } else {
        console.error(`Error from function \"getmouseposincanvas()\": parameter \"canvas\" is not a HTMLCanvasElement. Instead it is ${typecanvas}.`)
    }
}
class Key {
    constructor(keycode, callback) {
        this.keycode = keycode;
        this.callback = callback;
    }
}
class KeyDefinition {
    constructor(keys) {
        this.keys = keys;
    }
}
let Input = {
    InputInitalizer(keyDefinition) {
        if (typeof keyDefinition == 'object') {
            for (let key in keyDefinition.keys) {
                if (focusedElement) {
                    let focusedElement = keyDefinition.focusedElement;
                    let usingfocusedElement = true;
                    let keyname = keyDefinition.keys[key].keycode;
                    let keyfunc = keyDefinition.keys[key].callback;
                    document.addEventListener("keydown", (e) => {
                        if (e.code == keyname) {
                            keyfunc()
                        }
                    })
                }
            }
        } else if (typeof keyDefinition == 'function') {
            if (CheckIfVarIsCertainClass(keyDefinition,"KeyDefinition")) {
                
            }
        }
    }
}
function InitializeSprite(dimension, sprite) {
    if (dimension == "2D") {
        sprite.position = new Vector2(0,0)
        sprite.size = {
            width: 0,
            height: 0
        }
        sprite.color = {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        };
        sprite.rotation = 0;
        sprite.velocity = {
            x: 0,
            y: 0
        };
        sprite.gravity = 1
        sprite.friction = 0;
    } else if (dimension == "3D") {
        sprite.position = {
            x: 0,
            y: 0,
            z: 0
        };
        sprite.size = {
            width: 0,
            height: 0,
            depth: 0
        }
        sprite.color = {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        };
    }
}

