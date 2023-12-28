const {isFuelValid, isSpeedValid, isTimeValid, isStringValid, isYearValid, isMaxSpeedValid} = require('./validation');

class Car {

    _brand = null;
    _model = null;
    _yearOfManufacturing = 0;
    _maxSpeed = 0;
    _maxFuelVolume = 0; /*(число в литрах от 5 до 20)*/
    _fuelConsumption = 0;
    _currentFuelVolume = 0; /*(число в литрах, по умолчанию 0)*/
    _isStarted = false; /*(логический тип, по умолчанию false)*/
    _mileage = 0; /*(число в километрах, по умолчанию 0)*/


    start() {
        if (this._isStarted) {
            throw new Error('Машина уже заведена');
        } else {
            this._isStarted = true;
        }
    };

    shutDownEngine() {
        if (this._isStarted) {
            this._isStarted = false;
        } else {
            throw new Error('Машина ещё не заведена');
        }
    };

    fillUpGasTank(fuel) {

        if (!isFuelValid(fuel)) {
            throw new Error('Неверное количество топлива для заправки');
        }

        if (this._currentFuelVolume > this._maxFuelVolume) {
            throw new Error('Топливный бак переполнен');
        } else {
            this._currentFuelVolume += fuel;
        }
    };

    drive(speed, hours) {

        if (!isSpeedValid(speed)) {
            throw new Error('Неверная скорость');
        }

        if (speed > this._maxSpeed) {
            throw new Error('Машина не может ехать так быстро');
        }

        if (!isTimeValid(hours)) {
            throw new Error('Неверное количество часов');
        }

        if (!this._isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }

        const requiredFuel = (speed / 100) * hours;

        if (requiredFuel > this._currentFuelVolume) {
            throw new Error('Недостаточно топлива');
        }

        this._currentFuelVolume -= requiredFuel;
        this._mileage += speed * hours;
    };

    get getBrand() {

        if (this._brand === '') {
            throw new Error('Бренд не введен');
        } else {

            return this._brand;
        }
    };

    set setBrand(value) {
        if (!isStringValid(value)) {
            throw new Error('строка от 1 до 50 символов включительно');
        } else {
            this._brand = value;
        }
    };

    get getModel() {

        if (this._model === null) {
            throw new Error('Модель не введена');
        } else {

            return this._model;
        }
    };

    set setModel(value) {

        if (!isStringValid(value)) {
            throw new Error('строка от 1 до 50 символов включительно');
        } else {
            this._model = value;
        }

    };

    get getYearOfManufacturing() {

        if (this._yearOfManufacturing === null) {
            throw new Error('Год не введен');
        } else {

            return this._yearOfManufacturing;
        }

    };

    set setYearOfManufacturing(value) {

        if (!isYearValid(value)) {
            throw new Error('число от 1900 до текущего года включительно');
        } else {
            this._yearOfManufacturing = value;
        }

    };

    get getMaxSpeed() {

        if (this._maxSpeed === 0) {
            throw new Error('Не верная максимальная скорость');
        } else {

            return this._maxSpeed;
        }

    };

    set setMaxSpeed(value) {

        if (!isMaxSpeedValid(value)) {
            throw new Error('число от 100 до 300 км/ч');
        } else {
            this._maxSpeed = value;
        }

    };

    get getMaxFuelVolume() {

        if (this._maxFuelVolume === 0) {
            throw new Error('Максимальное количество топлива не указано');
        } else {

            return this._maxFuelVolume;
        }

    };

    set setMaxFuelVolume(value) {

        if (!isMaxSpeedValid(value)) {
            throw new Error('число от 100 до 300 км/ч');
        } else {
            this._maxSpeed = value;
        }

    }


}


const car = new Car()
car.setMaxSpeed = 300;


