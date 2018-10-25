/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    hashtags = hashtags.map((s) => s.toLowerCase());
    uniq_tags = []
    hashtags.reduce((acc, item) => {
        if(!acc.includes(item))
            acc.push(item);
        return acc;
    }, uniq_tags);
    return uniq_tags.join(', ');
};
