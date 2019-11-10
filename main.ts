// Infrared extension

//% color="#4C97FF"
namespace Micro:Bit-IR {

    let usedPin = AnalogPin.P0;

    function wait_for_signal() {
        while (pins.analogReadPin(usedPin) > 500) { }
    }


    function read_on() {
        let c = 0;
        while (pins.analogReadPin(usedPin) < 500 && c < 500) {
            c++;
        }
        return c;
    }

    function read_off() {
        let d = 0;
        while (pins.analogReadPin(usedPin) > 500 && d < 500) {
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
    export function initInfrared(pin: AnalogPin) {
        usedPin = pin
    }

    /**
     * This is a reporter block that returns a number
     */
    //% block
    export function getPressedKey(): string {
        let tasta = readKey()
        switch (tasta) {
            case 16753245:
                return "1"
            case 16736925:
                return "2"
            case 16769565:
                return "3"
            case 16720605:
                return "4"
            case 16712445:
                return "5"
            case 16761405:
                return "6"
            case 16769055:
                return "7"
            case 16754775:
                return "8"
            case 16748655:
                return "9"
            case 16750695:
                return "0"
            case 16738455:
                return "*"
            case 16756815:
                return "#"
            case 16718055:
                return "u"
            case 16730805:
                return "d"
            case 16716015:
                return "<"
            case 16734885:
                return ">"
            case 16726215:
                return "ok"
            default:
                return "n/a"
        }
    }

}
 