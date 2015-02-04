import { curry2 } from 'fj-curry';


function _and(x, y) {
  return (...args) => {
    return x.apply(null, args) && y.apply(null, args);
  };
}

let and = curry2(_and);

export default and;


