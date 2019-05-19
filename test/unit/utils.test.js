/* eslint-disable no-undef */
const utils = require('../../lib/utils')

let expectations = {
  isArray: [
    ['should be true given array', [], true],
    ['should be false given object', {}, false],
    ['should be false given string', 'boom', false],
    ['should be false given function', () => {}, false],
  ],

  isArrayEmpty: [
    ['should be true given empty array', [], true],
    ['should be false given non-empty array', [1,2,3], false],
    ['should be false given not array', {}, false],
    ['should be false given not array', 'boom', false],
  ],

  isString: [
    ['should be true given string', 'lalala', true],
    ['should be false given array', [], false],
    ['should be false given object', {}, false],
    ['should be false given integer', 1, false],
  ],

  isNumber: [
    ['should be true given integer', 1, true],
    ['should be true given float', 1.1, true],
    ['should be false given NaN', NaN, false],
    ['should be false given string', '1', false],
    ['should be false given array', [], false],
  ],

  isUndefined: [
    ['should be true given undefined', undefined, true],
    ['should be false given boolean', true, false],
    ['should be false given string', '', false],
    ['should be false given function', () => {}, false],
  ],

  isObject: [
    ['should be true given object', {}, true],
    ['should be false given array', [], false],
    ['should be false given string', 'boom', false],
    ['should be false given number', 1, false],
    ['should be false given function', function() {}, false],
    ['should be false given async function', async() => {}, false],
  ],

  isDate: [
    ['should be true given a date', new Date(), true],
    ['should be false given a string', '2019-05-21T02:28:30.408Z', false],
    ['should be false given a number', 1558405722786, false],
    ['should be false given an object', {}, false],
  ],

  isFunction: [
    ['should be true given function', function() {}, true],
    ['should be true given arrow function', () => {}, true],
    ['should be true given async function', async function() {}, true],
    ['should be true given async arrow function', async () => {}, true],
  ],

  forEach: [],
  merge: [],
  extend: [],
  bind: [],
}

describe('Utils', () => {
  it('should exist', () => {
    expect(typeof utils).toBe('object')
  })

  for (let method of Object.keys(expectations)) {
    describe(method, () => {
      for (let comparison of expectations[method]) {
        it(comparison[0], () => {
          expect(utils[method](comparison[1])).toBe(comparison[2])
        })
      }
    })
  }
})

