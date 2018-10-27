// Телефонная книга
var phoneBook = {};


function showBook() {
    var keys = Object.keys(phoneBook),
        result = [];
    for(var i = 0; i < keys.length; i++) {
        var man = keys[i],
            numbers = phoneBook[keys[i]];
        if(numbers.length === 0)
            continue;
        else
            result.push(man + ": " + numbers.join(", "));
    }
    return result.sort();
}

function addNumber(person, number) {
    if(!phoneBook.hasOwnProperty(person))
        phoneBook[person] = [];
    phoneBook[person].push(number);
}

function removePhone(number) {
    var keys = Object.keys(phoneBook),
        result = false;
    for(var i = 0; i < keys.length; i++) {
        var acc_init = [];
        phoneBook[keys[i]] = phoneBook[keys[i]].reduce((acc, item) => {
            if(item !== number) acc.push(item);
            else result = true;
            return acc;
        }, acc_init);
    }
    return result;
}

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    if(command === "SHOW") {
        return showBook();
    } else if(command.startsWith("ADD")) {
        var args = command.split(' ').slice(1);
        person = args[0];
        numbers = args[1].split(',');
        for (var i=0; i<numbers.length; i++) {
            addNumber(person, numbers[i]);
        }
    } else if(command.startsWith("REMOVE_PHONE")) {
        var number = command.split(' ')[1];
        return removePhone(number);
    }
};
