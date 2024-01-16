const {isFuelValid, isSpeedValid, isTimeValid, isStringValid, isYearValid, isMaxSpeedValid, isNumberValid  } = require('./validation');

class Car {
    #brand = null;
    #model = null;
    #yearOfManufacturing = null;
    #maxSpeed = 0;
    #maxFuelVolume = 0;
    #fuelConsumption = 0;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get getBrand() {
        if (this.#brand === '') {
            throw new Error('Бренд не введен !');
        }

        return this.#brand;
    }

    set setBrand(value) {
        if (!isStringValid(value)) {
            throw new Error('строка от 1 до 50 символов включительно !');
        }

        this.#brand = value;
    }

    get getModel() {
        if (this.#model === null) {
            throw new Error('Модель не введена !');
        }

        return this.#model;
    }

    set setModel(value) {
        if (!isStringValid(value)) {
            throw new Error('строка от 1 до 50 символов включительно !');
        }

        this.#model = value;
    }

    get getYearOfManufacturing() {
        if (this.#yearOfManufacturing === null) {
            throw new Error('Год не введен !');
        }

        return this.#yearOfManufacturing;
    }

    set setYearOfManufacturing(value) {
        if (!isYearValid(value)) {
            throw new Error('число от 1900 до текущего года включительно !');
        }

        this.#yearOfManufacturing = value;
    }

    get getMaxSpeed() {
        if (this.#maxSpeed === 0) {
            throw new Error('Не верная максимальная скорость !');
        }

        return this.#maxSpeed;
    }

    set setMaxSpeed(value) {
        if (!isMaxSpeedValid(value)) {
            throw new Error('число от 100 до 300 км/ч !');
        }

        this.#maxSpeed = value;
    }

    get getMaxFuelVolume() {
        if (this.#maxFuelVolume === 0) {
            throw new Error('Максимальное количество топлива не указано !');
        }

        return this._maxFuelVolume;
    }

    set setMaxFuelVolume(value) {
        if (!isMaxSpeedValid(value)) {
            throw new Error('число от 100 до 300 км/ч !');
        }

        this.#maxSpeed = value;
    }

    get getFuelConsumption () {
        if (this.#fuelConsumption === 0) {
            throw new Error('Расход  топлива не указан !');
        }

        return this.#fuelConsumption;
    }

    set setFuelConsumption(value) {
        if (!isNumberValid(value)) {
            throw new Error('число ');
        }

        this.#fuelConsumption = value / 100;
    }

    get getCurrentFuelVolume (){
        return this.#currentFuelVolume;
    }

    get getIsStarted  (){
        return this.#isStarted;
    }

    get getIsStarted  (){
        return this.#isStarted;
    }

    get getMileage   (){
        return this.#mileage;
    }

    start() {
        if (this.#isStarted) {
            throw new Error('Машина уже заведена !');
        }

        this.#isStarted = true;
    }

    shutDownEngine() {
        if (!this.#isStarted) {
        throw new Error('Машина ещё не заведена !');
        }

        this.#isStarted = false;
    }

    fillUpGasTank(fuel) {
        if (!isFuelValid(fuel)) {
            throw new Error('Неверное количество топлива для заправки !');
        }

        if (this.#currentFuelVolume > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен !');
        }

        this.#currentFuelVolume += fuel;
    }

    drive(speed, hours) {
        if (!isSpeedValid(speed)) {
            throw new Error('Неверная скорость !');
        }

        if (speed > this.#maxSpeed) {
            throw new Error('Машина не может ехать так быстро !');
        }

        if (!isTimeValid(hours)) {
            throw new Error('Неверное количество часов !');
        }

        if (!this.#isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать !');
        }

        const requiredFuel = (speed / 100) * hours;

        if (requiredFuel > this.#currentFuelVolume) {
            throw new Error('Недостаточно топлива !');
        }

        this.#currentFuelVolume -= requiredFuel;
        this.#mileage += speed * hours;
    }
}
