import fs from 'node:fs/promises';

const versions = {};
for await (const file of fs.glob('packages/*/package.json')) {
  const packageJson = JSON.parse(await fs.readFile(file));
  versions[packageJson.name] = {
    file,
    packageJson: packageJson
  }
}

const checkVersions = (versions) => (acc, [dependencyPackageName, actualDependencyPackageVersion]) => {
  if (!versions[dependencyPackageName]) {
    return acc;
  }

  const expectedDependencyVersion = versions[dependencyPackageName].packageJson.version;
  if (expectedDependencyVersion === actualDependencyPackageVersion) {
    return acc;
  }

  console.log('Updating', dependencyPackageName, 'to version', expectedDependencyVersion)
  acc[dependencyPackageName] = expectedDependencyVersion;
  return acc;
}

Object.entries(versions).forEach(([packageName, { packageJson }]) => {
  console.log(packageName)

  packageJson.dependencies = Object.entries(packageJson.dependencies)
    .reduce(checkVersions(versions), packageJson.dependencies);

  if (packageJson.devDependencies) {
    packageJson.devDependencies = Object.entries(packageJson.devDependencies)
      .reduce(checkVersions(versions), packageJson.devDependencies);
  }
});

await Promise.all(Object.entries(versions).map(([, { file, packageJson }]) => {
  console.log('Writing file', file);
  return fs.writeFile(
    file,
    `${JSON.stringify(packageJson, null, 2)}\n`
  )
}));
