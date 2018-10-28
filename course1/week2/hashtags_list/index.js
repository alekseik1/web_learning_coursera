/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    hashtags = [];
    tweet.split(' ').reduce( (acc, item) => {
        if (item.startsWith('#'))
            acc.push(item.slice(1));
        return acc;
    }, hashtags);
    return hashtags
};
