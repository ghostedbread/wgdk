# WGDK
WGDK (Web Game Development Kit, previously wgdk.js) is a Library in Javascript to make it easier to make web games.

# Example
```js
 // import { functions } ( OR * ) from WGDK or cdn
 // basic movement using WGDK
 let sprite = sprite("test.png");
 let xpos = 0;
 let yspeed = 0;
 let movingspeed = 1
 sprite.pos = new Vector2(0,0);
 setInterval(function () {
  yspeed += 0.25
  sprite.pos = new Vector2(xpos, yspeed);
 }, 500)
 onKeyPress({
    { key: "a", action: function () {xpos+=movingspeed} },
    { key: "d", action: function () {xpos-=movingspeed} },
    { key: "shift", action: function () {movingspeed*=2} }
 })
 
 ```
 ### 3D coming soon?
<b><i>yesn't</i></b>
