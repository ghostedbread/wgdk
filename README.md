# wgdk.js
wgdk.js (Web Game Development Kit.js) is a Javascript library that makes it easier to make web games, it is currently in development.

# Examples
```js
 let WGDK = require('wgdk-js')
 WGDK.Initialize() // Assuming the wgdk.json file exists and has valid properties.
 window.onload = () => {
      WGDK.WGDKDisplay.square(100,50,-50,0,WGDK.WGDKPhysics.Collision("default"),"black")
      WGDK.WGDKDisplay.square(10,10,0,0,WGDK.WGDKPhysics.PlayerPhysics(),"red","player","WASDorarrow")
 }
 ```
 ```js
 let WGDKnode = require('wgdk-js/wgdknode-js') // uses the node version, coming very very soon. uses express.
 // [insert above code here :/]
