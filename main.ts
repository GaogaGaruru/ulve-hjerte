function Ændre_øjne () {
    if (tilfældigt == 10) {
        radio.sendString("blink")
    }
    if (xRotation > 50 && xRotation < 130) {
        radio.sendString("vågen")
    } else {
    	
    }
}
function hjerte () {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
    basic.pause(1000)
}
let xRotation = 0
let tilfældigt = 0
radio.setGroup(33)
radio.setTransmitPower(7)
basic.forever(function () {
    xRotation = Math.abs(input.rotation(Rotation.Pitch))
    tilfældigt = randint(0, 19)
    hjerte()
    Ændre_øjne()
})
