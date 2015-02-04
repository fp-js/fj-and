import test from 'prova';
import and from './';


test('fj-and', (t) => {
  t.plan(7);
 
  let T = () => true;
  let F = () => false;
  let isT = (x) => x === true;
  let isF = (x) => x === false;

  t.ok(and(T, T)());
  t.ok(and(T)(T)());

  t.ok(and(isT, isT)(true));
  t.notOk(and(isT, isT)(false));
  t.notOk(and(T, F)());
  t.notOk(and(F, F)());
  t.notOk(and(F, F)());
});
