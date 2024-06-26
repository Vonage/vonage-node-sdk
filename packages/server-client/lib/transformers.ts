import camelCase from 'lodash.camelcase';
import snakeCase from 'lodash.snakecase';
import kebabCase from 'lodash.kebabcase';
import isObject from 'lodash.isobject';

export type TransformFunction = (key: string) => string;

export type ObjectToTransform = Record<string | number, unknown>;

export type TransformedObject = Record<string | number, unknown>;

export type TransformFunctionPartialParams = [ObjectToTransform, boolean, boolean];

export type PartialTransformFunction = (
  objectToTransform: ObjectToTransform,
  deep?: boolean,
  preserve?: boolean,
) => TransformedObject;

export type TransformObjectKeys = (
  transformFn: TransformFunction,
  objectToTransform: ObjectToTransform,
  deep?: boolean,
  preserve?: boolean,
) => TransformedObject;

export type OmitFunction = (
  keys: Array<string>,
  obj: ObjectToTransform,
) => TransformedObject;

export type AnyTransformFunction = PartialTransformFunction | TransformObjectKeys | OmitFunction;

/**
 * Transforms the keys of an object based on a provided transformation function.
 *
 * @param {TransformFunction} transformFn - The function to transform the object's keys.
 * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
 * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
 * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
 * @return {Record<string | number, unknown>} A new object with transformed keys.
 */
export const transformObjectKeys = <T = TransformedObject, O = ObjectToTransform>(
  transformFn: TransformFunction,
  objectToTransform: O,
  deep = false,
  preserve = false,
): T => {
  const transformedObject: ObjectToTransform = {
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

  return transformedObject as T;
};

/**
 * Transforms the keys of an object to camelCase.
 *
 * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
 * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
 * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
 * @return {Record<string | number, unknown>} A new object with camelCased keys.
 */
export const camelCaseObjectKeys = (...rest: TransformFunctionPartialParams) => transformObjectKeys(
  camelCase, 
  ...rest,
);

/**
 * Transforms the keys of an object to snake_case.
 *
 * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
 * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
 * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
 * @return {Record<string | number, unknown>} A new object with snake_cased keys.
 */
export const snakeCaseObjectKeys = (...rest: TransformFunctionPartialParams) => transformObjectKeys(
  snakeCase, 
  ...rest,
);

/**
 * Transforms the keys of an object to kebab-case.
 *
 * @param {Record<string | number, unknown>} objectToTransform - The object whose keys are to be transformed.
 * @param {boolean} [deep=false] - Whether to deeply transform nested object keys.
 * @param {boolean} [preserve=false] - Whether to preserve the original object's keys.
 * @return {Record<string | number, unknown>} A new object with kebab-cased keys.
 */
export const kebabCaseObjectKeys = (...rest: TransformFunctionPartialParams) => transformObjectKeys(
  kebabCase, 
  ...rest,
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
  keys: Array<string>,
  obj: ObjectToTransform,
): TransformedObject =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([key]) => !keys.includes(key)),
  );
