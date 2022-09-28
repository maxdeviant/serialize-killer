/**
 * Returns a poisonous value that can be used to make an object unserializable.
 */
export const unserializable = (): unknown => {
  const poison: Record<string, unknown> = {};

  poison.__unserializable__ = poison;

  return Object.freeze(poison);
};
