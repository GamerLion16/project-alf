input.onGesture(Gesture.Shake, function () {
    music.changeTempoBy(75)
    music.playTone(294, music.beat(BeatFraction.Sixteenth))
    music.playMelody("G F D A G E E D ", 120)
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(196, music.beat(BeatFraction.Double))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Double))
    music.playTone(156, music.beat(BeatFraction.Double))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playMelody("G F D A G E E D ", 120)
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(196, music.beat(BeatFraction.Double))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Double))
    music.playTone(156, music.beat(BeatFraction.Double))
    music.playMelody("G F D D G E E C ", 120)
    music.playTone(165, music.beat(BeatFraction.Breve))
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # . # . #
        # # # . #
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
})
