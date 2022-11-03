// Web Development Kit - Version 1.0
let usedcanvas;
let dimension;
let updaterate;
let keyalias;
// functions
function initialize(element) {
    usedcanvas = element;
}
function setfps(fps) {
    updaterate = 1000 / fps; // fps -> ms
}
// Vector stuff
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    forward = () => {
        return new Vector2(this.x, this.y + 1)
    }

    down = () => {
        return new Vector2(this.x, this.y - 1)
    }

    left = () => {
        return new Vector2(this.x - 1, this.y)
    }

    right = () => {
        return new Vector2(this.x + 1, this.y)
    }
    
}
class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    forward = () => {
        return new Vector3(this.x, this.y, this.z + 1)
    }
    backward = () => {
        return new Vector3(this.x, this.y, this.z - 1)
    }
    left = () => {
        return new Vector3(this.x - 1, this.y, this.z)
    }
    right = () => {
        return new Vector3(this.x + 1, this.y, this.z)
    }
    up = () => {
        return new Vector3(this.x, this.y + 1, this.z)
    }
}

function getmousepos(element, relative) {
    element.addEventListener('mousedown', function (e) {
        // Get the target
        const target = e.target;
    
        // Get the bounding rectangle of target
        const rect = target.getBoundingClientRect();
    
        // Mouse position
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    });
    let returnedx;
    let returnedy;

    function cnvs_getCoordinates(e) {
        if (relative == true) {
            returnedx = x;
            returnedy = y;
        } else {
            let x2 = e.clientX;
            let y2 = e.clientY;
            returnedx = x2;
            returnedy = y2;
        }
    }

    function cnvs_clearCoordinates() {
        returnedx = "";
        returnedy = "";
    }
    let typecanvas = `${typeof element}`;
    if (typecanvas[0].toLowerCase() == "a" || "e" || "i" || "o" || "u") { // grammar lol
        `an ${typeof element}`
    } else {
        typecanvas = `a ${typeof canvas}`
    }
    if (typeof element == HTMLElement) {
        return new Vector2(returnedx, returnedy)
    } else {
        console.error(`Error from function \"getmouseposincanvas()\": parameter \"element\" is not a HTML Element. Instead it is ${typecanvas}.`)
    }
}
let Input = {
    InputInitalizer(keyDefinition) {
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
    }
}
class Sprite { 
    constructor(position, width, height, display, identifier) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.display = display;
        this.identifier = identifier;
        if (position instanceof Vector2 == false)
            console.error(`Sprite ${identifier}'s position is not a Vector2!`)
        if (typeof display != "object")
            console.error(`Sprite ${identifier}'s display parameter is not a object!`)
        if ((typeof width != "number" && typeof height != "number") || (typeof width != "number") || (typeof height != "number"))
            console.error(`Sprite ${identifier}'s width and/or height parameters are not a number!`)
    }
    draw(element, position) {
        if (position instanceof Vector2) {
            if (typeof element == HTMLCanvasElement) {
                if (Object.hasOwn(this.display, "url")) {
                    if (Object.hasOwn(this.display, "color")) {
                        var tester=new Image();
                        tester.onerror=()=>{
                            // parse color key as fallback.
                            let r = color.r || 0;
                            let g = color.g || 0;
                            let b = color.b || 0;
                            let a = color.a || 1;
                            ctx.fillStyle = `rgba(${r},${g},${b},${a})`
                            if (!position) {
                                ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
                            } else {
                                ctx.fillRect(position.x, position.y, this.width, this.height)
                            }
                        }
                        tester.src=display.url;
                    }
                    let ctx = element.getContext("2d")
                    if (!position) {
                        ctx.drawImage(this.display.url, this.position.x, this.position.y)
                    } else {
                        ctx.drawImage(this.display.url, position.x, position.y)
                    }
                }
            }
        }
    }
    
}
function onKeyPress(keydict) {
    if (typeof keydict != "object")
        return TypeError("Invalid KeyDictionary: " + keydict + ",\n KeyDictionary is not a object.")
    for (const key in keydict) {
        let keydef = keydict[key];
        // error prevention
        if (typeof keydef != "object") return TypeError("Invalid KeyDefiniton: " + keydef + ".")
        if (Object.hasOwn(keydef, "key") && Object.hasOwn(keydef, "action")) {
            if (Object.hasOwn(keydef, "hold")) {
                
            }
            document.addEventListener("keydown", (e) => {
                if (e.code == keydef.key) {
                    keydef.action()
                }
            })
        } else {return TypeError("Invalid KeyDefiniton: " + keydef + ".")}
    }
}
// end of file :D
