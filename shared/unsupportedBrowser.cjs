throw new Error(
  '@vonage/* packages are Node-only. Do not bundle them in the browser.\n' +
  'Move this code server-side and keep keys out of client bundles.'
);
