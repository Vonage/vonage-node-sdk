import camelCase from 'lodash.camelcase';
import snakeCase from 'lodash.snakecase';
import partial from 'lodash.partial';

export const transformObjectKeys = (
  transformFn: (key: string | number) => string,
  objectToTransform: Record<string | number, unknown>,
  deep = false,
  preserve = false,
): Record<string | number, unknown> => {
  const transformedObject = {};

  for (const prop in objectToTransform) {
    if (!Object.prototype.hasOwnProperty.call(objectToTransform, prop)) {
      continue;
    }

    const value = objectToTransform[prop];
    transformedObject[transformFn(prop)]
            = deep
            && typeof value === 'object'
            && value !== null
            && !Array.isArray(value)
        ? transformObjectKeys(
          transformFn,
                      value as Record<string | number, unknown>,
                      deep,
                      preserve,
        )
        : value;
  }

  return {
    ...transformedObject,
    ...(preserve ? objectToTransform : {}),
  };
};

export const camelCaseObjectKeys = partial(transformObjectKeys, camelCase);

export const snakeCaseObjectKeys = partial(transformObjectKeys, snakeCase);
