// wgdk-js 1.0 //
// this version doesn't have the fancy stuff on the readme, still working on the features because I suck at js :/
function loadFile(filePath) { // copied code from stackoverflow :D
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
  }
  return result;
}
function Initialize(options) { // optional options parameter incase if wgdk.json doesn't exist, if both dont exist, it returns an error.
  var loc = window.location.pathname;
  var dir = loc.substring(0, loc.lastIndexOf('/')); // another copy of code from stackoverflow :/
  if (!options) {
     let json = loadFile(dir)
     // don't know how to check if its json yet so screw it :P
     let parsedjson = JSON.parse(JSON.stringify(json))
     
  }
