// Телефонная книга
var phoneBook = {};


showBook() {
    var keys = phoneBook.keys(),
        result = [];
    for(var i = 0; i < keys.length; i++) {
        var man = keys[i],
            numbers = phoneBook[keys[i]];
        if(numbers.length === 0)
            continue;
        else
            results.push(man + ": " + numbers.join(", "));
    }
    return result;
}

addNumber(person, number) {
    if(!phoneBook.hasOwnProperty(person))
        phoneBook[person] = [];
    else
        phoneBook[person].push(number);
}

removePhone(number) {
    var keys = phoneBook.keys(),
        result = false;
    for(var i = 0; i < keys.length; i++) {
        var acc_init = [];
        phoneBook[keys[i]] = phoneBook[keys[i]].reduce((acc, item) => {
            if(item !== number) acc.push(item);
            return acc;
        }, acc_init);
    }
}

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    if(command === "SHOW") {
        return showBook();
    } else if(command.startsWith("ADD")) {
               
    } else if(command.startsWith("REMOVE_PHONE")) {

    }
};
