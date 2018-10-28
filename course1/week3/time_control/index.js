/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    return createDateObject(date);
};

function _handleDateOperation(date, value, dim, isPlus) {
    var result = new Date(date);
    if(value < 0)
        throw TypeError("Value cannot be < 0");
    switch(dim) {
        case 'years':
            if(isPlus) result.setFullYear(date.getFullYear() + value);
            else result.setFullYear(date.getFullYear() - value);
            break;
        case 'months':
            if(isPlus) result.setMonth(date.getMonth() + value);
            else result.setMonth(date.getMonth() - value);
            break;
        case 'days':
            if(isPlus) result.setDate(date.getDate() + value);
            else result.setDate(date.getDate() - value);
            break;
        case 'hours':
            if(isPlus) result.setHours(date.getHours() + value);
            else result.setHours(date.getHours() - value);
            break;
        case 'minutes':
            if(isPlus) result.setMinutes(date.getMinutes() + value);
            else result.setMinutes(date.getMinutes() - value);
            break;
        default:
            throw TypeError("Incorrect dimension");
    }
    return result;
}

function getFormattedDate(date) {
    var res = '';
    res += date.getFullYear();
    res += '-';
    if (date.getMonth() < 10)
        res += '0' + (date.getMonth()+1);
    else
        res += (date.getMonth() + 1);
    res += '-';
    if (date.getDate() < 10)
        res += '0' + date.getDate();
    else
        res += date.getDate();
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
    var res = {};
    res.d = new Date(date);

    res.add = (value, dim) => {
        res.d = _handleDateOperation(res.d, value, dim, true);
        res.value = getFormattedDate(res.d);
        return res;
    };
    res.subtract = (value, dim) => {
        res.d = _handleDateOperation(res.d, value, dim, false);
        res.value = getFormattedDate(res.d);
        return res;
    };
    return res;
}
