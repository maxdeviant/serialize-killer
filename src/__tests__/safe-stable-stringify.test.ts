import stringify from 'safe-stable-stringify';
import { unserializable } from '../unserializable';

describe('`safe-stable-stringify` evasion', () => {
  it('prevents serialization', () => {
    expect(() =>
      console.log(
        stringify({
          _: unserializable(),
          hello: 'world',
        })
      )
    ).toThrowErrorMatchingInlineSnapshot(
      `"Object is marked as unserializable."`
    );
  });
});
