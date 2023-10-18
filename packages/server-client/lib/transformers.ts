import camelCase from 'lodash.camelcase';
import snakeCase from 'lodash.snakecase';
import kebabCase from 'lodash.kebabcase';
import partial from 'lodash.partial';
import isObject from 'lodash.isobject';

export type TransformFunction = (key: string) => string;

/**
 * Transforms the keys of an object based on a provided transformation function.
 *
 * @param {TransformFunction} transformFn - The function to transform the object's keys.
 * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
 * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
 * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
 *
 * @return {Record<string | number, unknown>} A new object with transformed keys.
 */
export const transformObjectKeys = (
  transformFn: TransformFunction,
  objectToTransform: Record<string | number, unknown>,
  deep = false,
  preserve = false,
): Record<string | number, unknown> => {
  const transformedObject = {
    ...(preserve ? objectToTransform : {}),
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
        isObject(t)
          ? transformObjectKeys(
            transformFn,
              t as Record<string | number, unknown>,
              deep,
              preserve,
          )
          : t,
      );
      continue;
    }

    transformedObject[newKey] = transformObjectKeys(
      transformFn,
      value as Record<string | number, unknown>,
      deep,
      preserve,
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
export const camelCaseObjectKeys = partial(transformObjectKeys, camelCase);

/**
 * Transforms the keys of an object to snake_case.
 *
 * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
 * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
 * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
 * @return {Record<string | number, unknown>} A new object with snake_cased keys.
 */
export const snakeCaseObjectKeys = partial(transformObjectKeys, snakeCase);

/**
 * Transforms the keys of an object to kebab-case.
 *
 * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
 * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
 * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
 * @return {Record<string | number, unknown>} A new object with kebab-cased keys.
 */
export const kebabCaseObjectKeys = partial(transformObjectKeys, kebabCase);
