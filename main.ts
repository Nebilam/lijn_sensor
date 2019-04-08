let strip: neopixel.Strip = null
function spinnen() {
    maqueen.motorStopAll()
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 25)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 25)
}
function rechts() {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
function links() {
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
function rechtdoor() {
    maqueen.motorStopAll()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 25)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 25)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
}
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB_RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        rechts()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        links()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        rechtdoor()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        rechtdoor()
    }
})
