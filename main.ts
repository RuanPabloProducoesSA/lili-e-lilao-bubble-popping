namespace SpriteKind {
    export const Logo = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
let mySprite2 = sprites.create(assets.image`Lili e Lilão Bubble Popping`, SpriteKind.Logo)
mySprite2.changeScale(2, ScaleAnchor.Middle)
mySprite2.setPosition(76, 45)
game.showLongText("Clique no A para jogar!", DialogLayout.Bottom)
sprites.destroy(mySprite2)
game.splash("Tutorial", "Como jogar: Use A e D pra mover pelo PC")
bubble.createBoard()
bubble.load_bubble()
let mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`Player Animate`,
500,
true
)
mySprite.top = 100
