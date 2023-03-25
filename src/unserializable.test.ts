import test, { ThrowsExpectation } from 'ava';
import { unserializable } from './unserializable';

const expectUnserializableError: ThrowsExpectation<TypeErrorConstructor> = {
  instanceOf: TypeError,
  message: 'Object is marked as unserializable.',
};

test('returns a frozen value', t => {
  t.true(Object.isFrozen(unserializable()));
});

test('cannot be unpoisoned', t => {
  const poison = unserializable();

  t.throws(
    () => {
      delete (poison as any).__unserializable__;
    },
    {
      instanceOf: TypeError,
      message: "Cannot delete property '__unserializable__' of #<Object>",
    }
  );
});

test('as a standalone value prevents serialization', t => {
  t.throws(() => JSON.stringify(unserializable()), expectUnserializableError);
});

test('`unserializable `as a top-level value in an object prevents serialization', t => {
  t.throws(
    () =>
      JSON.stringify({
        _: unserializable(),
        hello: 'world',
      }),
    expectUnserializableError
  );
});

test('as an element in an array prevents serialization', t => {
  t.throws(
    () => JSON.stringify(['hello', unserializable(), 'world']),
    expectUnserializableError
  );
});
