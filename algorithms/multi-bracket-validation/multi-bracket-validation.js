'use strict';

exports.validate (input) {

  let brackets = input.split('');
  let closed = 0;

  for (let i = 0; i < brackets.length; i++)  {
    if (brackets[i] === '{' || brackets[i] === '(' || brackets[i] === '[') {
      closed--;
    }
    else if (brackets[i] === '}' || brackets[i] === ')' || brackets[i] === ']') {
      closed++;
    }
  }
  if (closed !== 0) {return false};
  return true
}

module.exports = exports = {};
