const CURRENT_YEAR = new Date().getFullYear()

function isFuelValid(fuel) {
    return typeof fuel === 'number' || fuel >= 0;
}

function isSpeedValid(speed) {
    return typeof speed === 'number' || speed >= 0;
}

function isTimeValid(hour) {
    return typeof hour === 'number' || hour >= 0;
}

function isStringValid(value) {
    return typeof value === 'string' && (value.length >= 1 && value.length <= 50) && !value.includes(' ');
}

function isYearValid(value) {
    return typeof value === 'number' && (value >= 1900 && value <= `${CURRENT_YEAR}`);
}

function isMaxSpeedValid(value) {
    return typeof value === 'number' && (value >= 100 && value <= 300);
}


module.exports = {
    isFuelValid,
    isTimeValid,
    isSpeedValid,
    isStringValid,
    isYearValid,
    isMaxSpeedValid,
}