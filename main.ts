scene.setBackgroundColor(7)

let player = sprites.create(assets.image`collector`, SpriteKind.Player)
controller.moveSprite(player, 100, 100)
player.setStayInScreen(true)

info.setScore(0)

let apple: Sprite = null

game.onUpdateInterval(1500, function () {
    apple = sprites.create(assets.image`apple`, SpriteKind.Food)
    apple.setPosition(randint(10, 150), randint(10, 110))
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.disintegrate, 200)
})
