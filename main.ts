// Infrared extension

//% color="#4C97FF"
namespace IR {

    function wait_for_signal() {
        while (pins.analogReadPin(AnalogPin.P0) > 500) { }
    }


    function read_on() {
        let c = 0;
        while (pins.analogReadPin(AnalogPin.P0) < 500 && c < 500) {
            c++;
        }
        return c;
    }

    function read_off() {
        let d = 0;
        while (pins.analogReadPin(AnalogPin.P0) > 500 && d < 500) {
            d++;
        }
        return d;
    }

    function readKey() {
        wait_for_signal();
        let c1 = 0;
        let c2 = 0;
        let res = 0;
        while (c1 < 25 && c2 < 25) {
            c1 = read_on();
            c2 = read_off();
        }
        for (let i = 0; i < 32; i++) {
            c1 = read_on();
            c2 = read_off();
            res = res + res;
            if (c2 > 10) {
                res = res + 1;
            }
        }
        return res;
    }



    /**
     * This is a statement block
     */
    //% block
    export function initInfrared(pin : AnalogPin) {

    }

    /**
     * This is a reporter block that returns a number
     */
    //% block
    export function getPressedKey(): String {
        let tasta = readKey()
        switch (tasta) {
            case 16753245:
                return "1"
            case 16736925:
                return "2"
            default:
                return convertToText(tasta)
        }
    }

}
 