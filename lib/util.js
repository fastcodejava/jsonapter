/**
 * Created by gdev on 4/11/2017.
 */
var _ = require('lodash');

function isNullOrUndefined(input) {
    return input === null || input === undefined;
}

function stringify(input, options) {
    var result = input;
    if (typeof input === 'object') {
        result = JSON.stringify(input, null, 2);
    }
    if (options.prefix) {
        result = options.prefix + result;
    }
    if (options.suffix) {
        result += options.suffix;
    }
    return result;
}

function getSize(input) {
    if (_.isArray(input) || _.isString(input)) {
        return input.length;
    } else if (_.isPlainObject(input)) {
        return _.keys(input).length;
    }
}

module.exports = {
    getSize: getSize,
    stringify: stringify,
    isNullOrUndefined: isNullOrUndefined
};