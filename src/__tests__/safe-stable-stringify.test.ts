import stringify from 'safe-stable-stringify';
import { unserializable } from '../unserializable';

describe('`safe-stable-stringify` evasion', () => {
  it('prevents serialization', () => {
    expect(() =>
      stringify({
        _: unserializable(),
        hello: 'world',
      })
    ).toThrowErrorMatchingInlineSnapshot(
      `"Object is marked as unserializable."`
    );
  });
});
