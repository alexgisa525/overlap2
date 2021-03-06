namespace SpriteKind {
    export const Helicopter = SpriteKind.create()
    export const Cloud = SpriteKind.create()
    export const LandingPad = SpriteKind.create()
    export const mountain = SpriteKind.create()
    export const bird = SpriteKind.create()
    export const feather = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += -1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.LandingPad, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    sprite.y += -2
    sprite.setVelocity(0, 0)
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.bird, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    bird.say("WATCH WHERE YOU'RE FLYING")
    feather.setPosition(124, 21)
    animation.runMovementAnimation(
    feather,
    animation.animationPresets(animation.bounceLeft),
    2000,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += -1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
// Control the copter with the + pad
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vx += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    copter.vy += 1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.mountain, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
})
let feather: Sprite = null
let bird: Sprite = null
let copter: Sprite = null
game.splash("Cloud Bump", "control pad flying")
scene.setBackgroundColor(9)
copter = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    .ffff.................ffff......
    ...ffffff.........fffffff.......
    .......fffffffffffff............
    ..............ff................
    ..............ff................
    ..............ff..222...........
    ....f.........ff222ff11.........
    ..ffffffff....2222f.1111........
    .....f......222222f11111........
    .....f...222222222f111112.......
    .....f222222222222ff11f22.......
    .....2222222222222fffff22.......
    .....2222222222222fffff22.......
    .....2222222222222fffff22.......
    ......222222222222222ff22.......
    .......222222222222222222.......
    ........2222222222222222........
    ...........f2...222222..........
    ...........f........f...........
    ......f....f........f.....f.....
    ......ffffffffffffffffffff......
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Helicopter)
copter.setStayInScreen(true)
// Create and place "clouds"  Sprites
let cloud1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 8 . . . . . . 
    . . . 1 1 8 8 8 1 1 1 1 1 1 . . 
    . 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
    . 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
    1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
    1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
    . 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
    . . . . 1 1 8 8 1 1 8 8 1 . . . 
    . . . . . . 8 8 8 1 1 1 1 . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cloud)
cloud1.x = 20
cloud1.y = 30
let cloud2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 8 . . . . . . 
    . . . 1 1 8 8 8 1 1 1 1 1 1 . . 
    . 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
    . 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
    1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
    1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
    . 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
    . . . . 1 1 8 8 1 1 8 8 1 . . . 
    . . . . . . 8 8 8 1 1 1 1 . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cloud)
cloud2.x = 50
cloud2.y = 65
let cloud3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 8 . . . . . . 
    . . . 1 1 8 8 8 1 1 1 1 1 1 . . 
    . 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
    . 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
    1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
    1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
    . 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
    . . . . 1 1 8 8 1 1 8 8 1 . . . 
    . . . . . . 8 8 8 1 1 1 1 . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cloud)
cloud3.x = 100
cloud3.y = 40
let landing = sprites.create(img`
    58585858585858585858585858585858
    58585858585858585858585858585858
    ...............ff...............
    ...............ff...............
    ...............ff...............
    ...............ff...............
    ...............ff...............
    ...............ff...............
    ...............ff...............
    ...............ff...............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.LandingPad)
landing.y = 125
let mountain = sprites.create(img`
    ................................................
    ................................................
    ................................................
    ...................11...........................
    ...................111..........................
    ..................11111.........................
    ..................11111.........................
    .................1111111........................
    .................11111111.......................
    ................1111111111......................
    ................1111111111......................
    ................11111111111.....................
    ...............1111111111111....................
    ...............11111111111111...................
    ..............111111111111111...................
    ..............1111111111111111..................
    .............11111111111111111..................
    .............ccccccccccccccccc..................
    .............ccccccccccccccccc..................
    ............ccccccccccccccccccc.................
    ............cccccccccccccccccccc................
    ...........ccccccccccccccccccccc................
    ...........cccccccccccccccccccccc...............
    ..........cccccccccccccccccccccccc..............
    ..........cccccccccccccccccccccccc..............
    ..........ccccccccccccccccccccccccc.............
    .........cccccccccccccccccccccccccc.............
    .........ccccccccccccccccccccccccccc............
    ........ccccccccccccccccccccccccccccc...........
    ........ccccccccccccccccccccccccccccc...........
    .......ccccccccccccccccccccccccccccccc..........
    .......cccccccccccccccccccccccccccccccc.........
    ......ccccccccccccccccccccccccccccccccc.........
    ......cccccccccccccccccccccccccccccccccc........
    .....ccccccccccccccccccccccccccccccccccc........
    .....cccccccccccccccccccccccccccccccccccc.......
    ....cccccccccccccccccccccccccccccccccccccc......
    ....cccccccccccccccccccccccccccccccccccccc......
    ...cccccccccccccccccccccccccccccccccccccccc.....
    ...cccccccccccccccccccccccccccccccccccccccc.....
    ...ccccccccccccccccccccccccccccccccccccccccc....
    ..ccccccccccccccccccccccccccccccccccccccccccc...
    ..ccccccccccccccccccccccccccccccccccccccccccc...
    .ccccccccccccccccccccccccccccccccccccccccccccc..
    .cccccccccccccccccccccccccccccccccccccccccccccc.
    ccccccccccccccccccccccccccccccccccccccccccccccc.
    cccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccc
    `, SpriteKind.mountain)
mountain.setPosition(145, 105)
bird = sprites.create(img`
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ...............f................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ...................fffffff......................
    .................ff1111f11f.....................
    ................f11555f1111f....................
    ...............ffff555f111f1f...................
    ..............f1111f55f111f1f...................
    ..............f11111f5f11111f...................
    ..............f11111f55f1111f...................
    ..............f51115f555ffffff..................
    ...............f555f555f222222f.................
    ................fff444f2ffffff..................
    ................f444444f22222f..................
    .................ff44444fffff...................
    ...................fffff........................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    `, SpriteKind.bird)
bird.setPosition(124, 21)
feather = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    .................ff.............
    ...............ff1df............
    ..............f11d1f............
    .............f11ddff............
    .............f1dd11f............
    ............ffdd11f.............
    ...........f1fd1fff.............
    ..........ff1dd1f...............
    .........f1f1d1f................
    .........f1dd1ff................
    .........f1d11f.................
    ........f1ddff..................
    .......fffff....................
    ........f.......................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.feather)
