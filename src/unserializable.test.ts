import { unserializable } from './unserializable';

describe('unserializable', () => {
  it('returns a frozen value', () => {
    expect(Object.isFrozen(unserializable())).toBe(true);
  });

  it('cannot be unpoisoned', () => {
    const poison = unserializable();

    expect(() => {
      delete (poison as any).__unserializable__;
    }).toThrowErrorMatchingInlineSnapshot(
      `"Cannot delete property '__unserializable__' of #<Object>"`
    );
  });

  describe('as a standalone value', () => {
    it('prevents serialization', () => {
      expect(() =>
        JSON.stringify(unserializable())
      ).toThrowErrorMatchingInlineSnapshot(
        `"Object is marked as unserializable."`
      );
    });
  });

  describe('as a top-level value in an object', () => {
    it('prevents serialization', () => {
      expect(() =>
        JSON.stringify({
          _: unserializable(),
          hello: 'world',
        })
      ).toThrowErrorMatchingInlineSnapshot(
        `"Object is marked as unserializable."`
      );
    });
  });

  describe('as an element in an array', () => {
    it('prevents serialization', () => {
      expect(() =>
        JSON.stringify(['hello', unserializable(), 'world'])
      ).toThrowErrorMatchingInlineSnapshot(
        `"Object is marked as unserializable."`
      );
    });
  });
});
