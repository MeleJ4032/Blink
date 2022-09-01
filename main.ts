input.onButtonPressed(Button.A, function () {
    item.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    item.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    item.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    item.change(LedSpriteProperty.Y, -1)
})
let item: game.LedSprite = null
item = game.createSprite(2, 4)
loops.everyInterval(500, function () {
	
})
