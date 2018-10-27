/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    return createDateObject(date);
};

function _handleDateOperation(date, value, dim, isPlus) {
    if(value < 0)
        throw TypeError("Value cannot be < 0");
    switch(dim) {
        case 'years':
            break;
        case 'months':
            break;
        case 'days':
            break;
        case 'hours':
            break;
        case 'minutes':
            break;
        default:
            throw TypeError("Incorrect dimension");
    }
}

function getFormattedDate(date) {
    var res = '';
    res += date.getFullYear();
    res += '-';
    if (date.getMonth() < 10)
        res += '0' + date.getMonth();
    else
        res += date.getMonth();
    res += '-';
    if (date.getDay() < 10)
        res += '0' + date.getDay();
    else
        res += date.getDay();
    res += ' ';
    if (date.getHours() < 10)
        res += '0' + date.getHours();
    else
        res += date.getHours();
    res += ':';
    if (date.getMinutes() < 10)
        res += '0' + date.getMinutes();
    else
        res += date.getMinutes();
    return res;
}

function createDateObject(date) {
    var d = new Date(date);
    d.add = (value, dim) => {
        _handleDateOperation(d, value, dim, true);
        return d;
    };
    d.subtract = (value, dim) => {
        _handleDateOperation(d, value, dim, false);
        return d;
    };
    d.value = getFormattedDate(d);
    return d;
}
