import { curry2 } from 'fj-curry';


function _and(x, y) {
  return () => {
    return x() && y();
  };
}

let and = curry2(_and);

export default and;


