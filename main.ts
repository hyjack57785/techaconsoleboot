namespace SpriteKind {
    export const Logo = SpriteKind.create()
}
let LogoSprite: Sprite = null
let YrDevText: TextSprite = null
let TECHA: TextSprite = null
let LoadAnimation: Sprite = null
function GameBoot (Year: string, Developer: string) {
    LogoSprite = sprites.create(assets.image`Techa Logo Inverted`, SpriteKind.Logo)
    LogoSprite.changeScale(3, ScaleAnchor.Middle)
    LogoSprite.setPosition(80, 38)
    YrDevText = textsprite.create("" + Year + " ------- " + Developer)
    YrDevText.setPosition(80, 97)
    TECHA = textsprite.create("> Approved by Techa Inc <")
    TECHA.setPosition(80, 109)
    music.play(music.stringPlayable("C D E F E A C5 C ", 173), music.PlaybackMode.UntilDone)
    LoadAnimation = sprites.create(assets.image`Default`, SpriteKind.Logo)
    LoadAnimation.setPosition(145, 12)
    characterAnimations.loopFrames(
    LoadAnimation,
    assets.animation`LoadingAnimationIcon`,
    120,
    characterAnimations.rule(Predicate.NotMoving)
    )
}
