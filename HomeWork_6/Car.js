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
        if (this._brand === '') {
            throw new Error('Бренд не введен !');
        }

        return this._brand;
    }

    set setBrand(value) {
        if (!isStringValid(value)) {
            throw new Error('строка от 1 до 50 символов включительно !');
        }

        this._brand = value;
    }

    get getModel() {
        if (this._model === null) {
            throw new Error('Модель не введена !');
        }

        return this._model;
    }

    set setModel(value) {
        if (!isStringValid(value)) {
            throw new Error('строка от 1 до 50 символов включительно !');
        }

        this._model = value;
    }

    get getYearOfManufacturing() {
        if (this._yearOfManufacturing === null) {
            throw new Error('Год не введен !');
        }

        return this._yearOfManufacturing;
    }

    set setYearOfManufacturing(value) {
        if (!isYearValid(value)) {
            throw new Error('число от 1900 до текущего года включительно !');
        }

        this._yearOfManufacturing = value;
    }

    get getMaxSpeed() {
        if (this._maxSpeed === 0) {
            throw new Error('Не верная максимальная скорость !');
        }

        return this._maxSpeed;
    }

    set setMaxSpeed(value) {
        if (!isMaxSpeedValid(value)) {
            throw new Error('число от 100 до 300 км/ч !');
        }

        this._maxSpeed = value;
    }

    get getMaxFuelVolume() {
        if (this._maxFuelVolume === 0) {
            throw new Error('Максимальное количество топлива не указано !');
        }

        return this._maxFuelVolume;
    }

    set setMaxFuelVolume(value) {
        if (!isMaxSpeedValid(value)) {
            throw new Error('число от 100 до 300 км/ч !');
        }

        this._maxSpeed = value;
    }

    get getFuelConsumption () {
        if (this._fuelConsumption === 0) {
            throw new Error('Расход  топлива не указан !');
        }

        return this._fuelConsumption;
    }

    set setFuelConsumption(value) {
        if (!isNumberValid(value)) {
            throw new Error('число ');
        }

        this._fuelConsumption = value / 100;
    }

    get getCurrentFuelVolume (){
        return this._currentFuelVolume;
    }

    get getIsStarted  (){
        return this._isStarted;
    }

    get getIsStarted  (){
        return this._isStarted;
    }

    get getMileage   (){
        return this._mileage;
    }

    start() {
        if (this._isStarted) {
            throw new Error('Машина уже заведена !');
        }

        this._isStarted = true;
    }

    shutDownEngine() {
        if (!this._isStarted) {
        throw new Error('Машина ещё не заведена !');
        }

        this._isStarted = false;
    }

    fillUpGasTank(fuel) {
        if (!isFuelValid(fuel)) {
            throw new Error('Неверное количество топлива для заправки !');
        }

        if (this._currentFuelVolume > this._maxFuelVolume) {
            throw new Error('Топливный бак переполнен !');
        }

        this._currentFuelVolume += fuel;
    }

    drive(speed, hours) {
        if (!isSpeedValid(speed)) {
            throw new Error('Неверная скорость !');
        }

        if (speed > this._maxSpeed) {
            throw new Error('Машина не может ехать так быстро !');
        }

        if (!isTimeValid(hours)) {
            throw new Error('Неверное количество часов !');
        }

        if (!this._isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать !');
        }

        const requiredFuel = (speed / 100) * hours;

        if (requiredFuel > this._currentFuelVolume) {
            throw new Error('Недостаточно топлива !');
        }

        this._currentFuelVolume -= requiredFuel;
        this._mileage += speed * hours;
    }
}
