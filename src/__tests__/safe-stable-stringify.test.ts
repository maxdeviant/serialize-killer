import test from 'ava';
import stringify from 'safe-stable-stringify';
import { unserializable } from '../unserializable';

test('evades serialization by `safe-stable-stringify`', t => {
  t.throws(
    () =>
      stringify({
        _: unserializable(),
        hello: 'world',
      }),
    { instanceOf: TypeError, message: 'Object is marked as unserializable.' }
  );
});
