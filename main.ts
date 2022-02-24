radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(num)
    basic.showNumber(num)
    basic.pause(500)
    basic.clearScreen()
})
let num = 0
radio.setGroup(7)
num = 0
