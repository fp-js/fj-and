import test from 'prova';
import and from './';


test('fj-and', (t) => {
  t.plan(5);
 
  let T = () => true;
  let F = () => false;

  t.ok(and(T, T)());
  t.ok(and(T)(T)());
  t.notOk(and(T, F)());
  t.notOk(and(F, F)());
  t.notOk(and(F, F)());
});
