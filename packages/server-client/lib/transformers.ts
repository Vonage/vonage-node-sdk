import camelCase from 'lodash.camelcase';
import snakeCase from 'lodash.snakecase';
import partial from 'lodash.partial';
import isObject from 'lodash.isobject';

export const transformObjectKeys = (
  transformFn: (key: string | number) => string,
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

export const camelCaseObjectKeys = partial(transformObjectKeys, camelCase);

export const snakeCaseObjectKeys = partial(transformObjectKeys, snakeCase);
