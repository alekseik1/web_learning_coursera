/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    const operations = [].slice.apply(arguments);
    var result = collection.slice();
    const original_collection = collection.slice();
    var operations_stack = [];
    for (op of operations) {
        if (op[0] === 'filterIn')
            operations_stack.push(op);
        else if (op[0] === 'select')
            operations_stack.unshift(op);
    }
    while (operations_stack.length > 0) {
        let op = operations_stack.pop();
        result = op[1](result);
    }
    return result;
}

/**
 * @params {String[]}
 */
function select() {
    const fields = arguments;
    let result = [];

    return ['select', function(collection) {
        for(let element of collection) {
            let tmp_res = {};
            for (let property of fields) {
                if (element.hasOwnProperty(property)) {
                    tmp_res[property] = Object.getOwnPropertyDescriptor(element, property).value;
                }
            }
            result.push(tmp_res);
        }
        return result;
    }];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn', function(collection) {
        let result = [];
        for (let element of collection) {
            for (let allowed_value of values) {
                if (Object.getOwnPropertyDescriptor(element, property).value === allowed_value) {
                    result.push(element);
                    break;
                }
            }
        }
        return result;
    }];
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
