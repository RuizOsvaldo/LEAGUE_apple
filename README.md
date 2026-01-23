# Apple Collector

## Introduction @unplugged
Welcome to The LEAGUE's Apple Collector game! In this beginner-friendly game, you'll learn the basics of game development by creating a simple collection game. Move your character around the screen to collect apples and increase your score. Let's start coding!

## Step 1

First, let's set up the game world with a background color.

From the ``||scene:Scene||`` category, use ``||scene:set background color||`` and choose a color you like for your game.

```blocks
scene.setBackgroundColor(7)
```

## Step 2

Now create your player character who will collect the apples.

From ``||sprites:Sprites||``, select ``||sprites:set mySprite to sprite to kind player||`` and move it into on start block. Select on 'mySprite' and 'rename' it to **myPlayer**. Set the kind to **Player** and choose an image from the `collector` image from gallery.

```blocks
scene.setBackgroundColor(7)
let myPlayer = sprites.create(assets.image`collector`, SpriteKind.Player)
```

## Step 3

Let's make the player move with the controller buttons!

From ``||controller:Controller||``, use ``||controller:move sprite with buttons||``.
Click the + sign to see **VX** and **VY** values, both should be 100.

```blocks
scene.setBackgroundColor(7)
let player = sprites.create(assets.image`collector`, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
```

## Step 4

Keep the player inside the screen boundaries so they don't disappear off the edges.

From ``||sprites:Sprites||``, use ``||sprites:set stay in screen||`` to **ON** for your player sprite.

```blocks
scene.setBackgroundColor(7)
let player = sprites.create(assets.image`collector`, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
player.setStayInScreen(true)
```

## Step 5

Initialize the score to keep track of how many apples you collect.

From ``||info:Info||``, use ``||info:set score to 0||`` to start your game with zero points.

```blocks
scene.setBackgroundColor(7)
let player = sprites.create(assets.image`collector`, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
player.setStayInScreen(true)
info.setScore(0)
```

## Step 6

Now let's make apples appear automatically throughout the game!

From ``||game:Game||``, drag out ``||game:on game update every||`` and set it to **2000** ms (which means every 2 seconds, a new apple will appear).

```blocks
game.onUpdateInterval(1500, function () {
	
})
```

## Step 7

Inside the game update interval, create an apple sprite.

Select ``||sprites:set mySprite to sprite kind Player||`` and rename mySprite to **apple** and change sprite kind to **Food**. Use the `apple` image from your assets.

```blocks
let apple: Sprite = null
game.onUpdateInterval(2000, function () {
    apple = sprites.create(assets.image`apple`, SpriteKind.Food)
})
```

## Step 8

Make each apple appear at a random position on the screen.

From ``||sprites:Sprites||``, use ``||sprites:set position to x=0 y=0||`` for the apple. For the coordinates, use ``||math:pick random||`` from the ``||math:Math||`` category:
- x: random from **10** to **150**
- y: random from **10** to **110**

This makes the game more fun because apples appear in different places each time!

```blocks
let apple: Sprite = null
game.onUpdateInterval(1500, function () {
    apple = sprites.create(assets.image`apple`, SpriteKind.Food)
    apple.setPosition(randint(10, 150), randint(10, 110))
})
```

## Step 9

Finally, let's make it so collecting apples increases your score!

From ``||sprites:Sprites||``, use ``||sprites:on sprite kind Player overlaps with otherSprite kind Player||`` and change one **Player** to **Food**. 

## Step 10

Inside of the overlaps group block, add the following:
- ``||info:change score by 1||`` to increase a point when you touch an apple
- ``||sprites:destroy||`` to remove the apple. Replace mySprite with 'otherSprite'. Click the plus sign to change the effects to **disintegrate** effect for **200** ms

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.disintegrate, 200)
})
```

## Conclusion @unplugged

Congratulations! You've created your first collection game! Try playing it and see how many apples you can collect.

**What you learned:**
- Creating and controlling sprites
- Setting up score tracking
- Spawning objects automatically
- Detecting collisions between sprites
- Using random positions
- Adding visual effects

**Try these challenges:**
- Change the apple spawn time to make it easier or harder
- Add different types of food worth different points
- Change the movement speed
- Try different destroy effects
- Add a countdown timer (check out the intermediate tutorial!)

Great job and keep coding!


> Open this page at [https://ruizosvaldo.github.io/league_apple/](https://ruizosvaldo.github.io/league_apple/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/ruizosvaldo/league_apple** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/ruizosvaldo/league_apple** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
