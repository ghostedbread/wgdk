# WGDK
WGDK (Web Game Development Kit, previously wgdk.js) is a Library in Javascript to make it easier to make web games.

# Example
```js
 // import { functions } ( OR * ) from WGDK or cdn
 let sprite = sprite("test.png");
 let xpos = 0;
 let yspeed = 0;
 let movingspeed = 1
 sprite.pos = new Vector2(0,0);
 setInterval(function () {
  yspeed += 0.25
  sprite.pos = new Vector2(xpos, yspeed);
 }, 500)
 onKeyPress(
   { "a", function () {xpos+=movingspeed} },
   { "d", function () {xpos-=movingspeed} },
   { "shift", function () {movingspeed*=2} }
  )
 ```
 ### 3D coming soon?
<b><i>yesn't</i></b>
