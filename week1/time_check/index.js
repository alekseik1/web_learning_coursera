/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    if(0 > hours || 60 <= minutes)
        return false;
    return true;
};
