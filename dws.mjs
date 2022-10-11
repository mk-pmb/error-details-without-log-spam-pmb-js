// -*- coding: utf-8, tab-width: 2 -*-

const alwaysCopyKeys = [
  'name',
];

const EX = function errorDetailsWithoutLogSpam(origErr) {
  const t = origErr && typeof origErr;

  if (t !== 'object') {
    const msg = ('Unsupported non-object error given to ' + EX.name + ': '
      + (String(t) || 'empty string') + ' '
      + (JSON.stringify(origErr) || String(origErr)));
    return new TypeError(msg);
  }

  const err = Object.create(origErr);
  function copyKey(k) {
    const v = origErr[k];
    if (v === undefined) { return; }
    err[k] = v;
  }
  alwaysCopyKeys.forEach(copyKey);

  Object.keys(origErr).forEach(copyKey); /*
    Conveniently, Object.keys() omits [Symbol(originalCallSite)]
    and [Symbol(mutatedCallSite)], whose values would be useless
    anyway in their console.log representation.
    */

  return err;
};


export default EX;
