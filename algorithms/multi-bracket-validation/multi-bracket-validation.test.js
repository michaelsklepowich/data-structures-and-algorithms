'use strict';

let validation = require('./multi-bracket-validation.js');

describe('multi-bracket validation', () => {

  it('requires a string for an input', () => {
    let input;
    if (typeof input !== 'string')
    return Error('Input must be a string');
    expect(err).toBeDefined();
  });

  it('recieves valid input', () =>  {
      let input = '{[()]}'
      let outcome = validation.validate(input)
      expect(outcome).toEqual(true);
  });

  it('recieves a string which returns false', () => {
    let input = '{[()]'
    let outcome = validation.validate(input)
    expect(outcome).toEqual(false);
  });
});
