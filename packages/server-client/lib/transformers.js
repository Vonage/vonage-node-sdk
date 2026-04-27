/**
 * @typedef {Object} TransformFunction
 */

/**
 * @typedef {Object} ObjectToTransform
 */

/**
 * @typedef {Object} TransformedObject
 */

/**
 * @typedef {Object} TransformFunctionPartialParams
 */

/**
 * @typedef {Object} PartialTransformFunction
 */

/**
 * @typedef {Object} TransformObjectKeys
 */

/**
 * @typedef {Object} OmitFunction
 */

/**
 * @typedef {Object} AnyTransformFunction
 */

export const words = (str) => str.
split(/[-_\s]+/).
flatMap((word) => word.split(/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/)).
filter(Boolean);

export const camelCase = (str) => words(str).
map((word, index) => index === 0 ?
word.toLowerCase() :
word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
).
join('');

export const snakeCase = (str) => words(str).
map((word) => word.toLowerCase()).
join('_');

export const kebabCase = (str) => words(str).
map((word) => word.toLowerCase()).
join('-');

export const isObject = (value) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

/**
   * Transforms the keys of an object based on a provided transformation function.
   *
   * @param {TransformFunction} transformFn - The function to transform the object's keys.
   * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
   * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
   * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
   * @return {Record<string | number, unknown>} A new object with transformed keys.
   */
export const transformObjectKeys = (
transformFn,
objectToTransform,
deep = false,
preserve = false) =>
{
  const transformedObject = {
    ...(preserve ? objectToTransform : {})
  };

  for (const prop in objectToTransform) {
    if (!Object.prototype.hasOwnProperty.call(objectToTransform, prop)) {
      continue;
    }

    const newKey = transformFn(prop);
    const value = objectToTransform[prop];
    if (!deep || !isObject(value)) {
      transformedObject[newKey] = value;
      continue;
    }

    if (Array.isArray(value)) {
      transformedObject[newKey] = value.map((t) =>
      isObject(t) ?
      transformObjectKeys(
        transformFn,
        t,
        deep,
        preserve
      ) :
      t
      );
      continue;
    }

    transformedObject[newKey] = transformObjectKeys(
      transformFn,
      value,
      deep,
      preserve
    );
  }

  return transformedObject;
};

/**
 * Transforms the keys of an object to camelCase.
 *
 * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
 * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
 * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
 * @return {Record<string | number, unknown>} A new object with camelCased keys.
 */
export const camelCaseObjectKeys = (...rest) => transformObjectKeys(
  camelCase,
  ...rest
);

/**
   * Transforms the keys of an object to snake_case.
   *
   * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
   * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
   * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
   * @return {Record<string | number, unknown>} A new object with snake_cased keys.
   */
export const snakeCaseObjectKeys = (...rest) => transformObjectKeys(
  snakeCase,
  ...rest
);

/**
   * Transforms the keys of an object to kebab-case.
   *
   * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
   * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
   * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
   * @return {Record<string | number, unknown>} A new object with kebab-cased keys.
   */
export const kebabCaseObjectKeys = (...rest) => transformObjectKeys(
  kebabCase,
  ...rest
);

/**
   * Omit keys from an object.
   *
   * @param {Array<string>} keys - The keys to omit.
   * @param {Record<string | number, unknown>} obj - The object from which to omit keys.
   *
   * @return {Record<string | number, unknown>} A new object with omitted keys.
   */
export const omit = (
keys,
obj) =>
Object.fromEntries(
  Object.entries(obj).
  filter(([key]) => !keys.includes(key))
);
