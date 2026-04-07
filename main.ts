/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah R
 * Created on: Apr 2026
 * This program will find the distance the object and determine if the distance is greater or less than 10.
*/

// variable
let numberDistance: number = 0
let neopixelStrip: neopixel.Strip = null

// startup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// find the distance with sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    numberDistance = sonar.ping(
        DigitalPin.P1, // trigger
        DigitalPin.P2, // echo
        PingUnit.Centimeters
    )
    basic.showString((numberDistance) + " cm")
    basic.showIcon(IconNames.Yes)

    // compare
    if (numberDistance < 10) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
    }

    else {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.show()
    }

    // resets
    pause(5000)
    basic.showIcon(IconNames.Happy)
    neopixelStrip.clear()
    neopixelStrip.show()
})
