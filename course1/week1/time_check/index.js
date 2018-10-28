/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    if(0 > hours || 60 <= minutes || 24 <= hours || 0 > minutes)
        return false;
    return true;
};
