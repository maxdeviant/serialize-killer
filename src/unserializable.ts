/**
 * Returns a poisonous value that can be used to make an object unserializable.
 */
export const unserializable = (): unknown => {
  const poison: Record<string, any> = {};

  poison.__unserializable__ = poison;
  poison.__unserializable__.toJSON = () => {
    throw new TypeError('Object is marked as unserializable.');
  };

  return Object.freeze(poison);
};
