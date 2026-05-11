class SmartLamp {
  #isOn;
  #brightness;

  constructor() {
    this.#isOn = false;
    this.#brightness = 0;
  }

  turnOn() {
    this.#isOn = true;
    console.log("Lamp turned on");
  }

  turnOff() {
    this.#isOn = false;
    console.log("Lamp turned off");
  }

  setBrightness(value) {
    if (this.#isOn == true && value >= 0 && value <= 100) {
      this.#brightness = value;
      console.log(`Brightness is set to ${value}`);
    } else {
      console.log("Invalid value");
    }
  }

  setStatus() {
    if (this.#isOn) {
      console.log(`The lamp is on and the brightness in ${this.#brightness}`);
    } else {
      console.log("The lamp in off");
    }
  }
}
