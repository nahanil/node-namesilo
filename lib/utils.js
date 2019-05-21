/**
 * A library of generic helper functions non-specific to axios
 * @module utils
 */
const toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if an array is empty
 * @param val
 * @returns {boolean} True if value is not empty, otherwise false
 */
function isArrayEmpty(val) {
  return Array.isArray(val) && val.every(this.isArrayEmpty);
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Boolean
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isBoolean(val) {
  return typeof val === 'boolean';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number' && !isNaN(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object' && !isArray(val);
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  let strVal = toString.call(val)
  return strVal === '[object Function]' || strVal === '[object AsyncFunction]'
}

module.exports = {
  isArray: isArray,
  isArrayEmpty: isArrayEmpty,
  isBoolean: isBoolean,
  isString: isString,
  isNumber: isNumber,
  isUndefined: isUndefined,
  isObject: isObject,
  isDate: isDate,
  isFunction: isFunction
};
