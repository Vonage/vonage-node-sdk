import { readFileSync, createWriteStream } from 'fs';
import RecursiveIterator from 'recursive-iterator';
import { ReflectionKind } from 'typedoc';

const data = readFileSync('./docs/docs.json', 'utf8');

const docs = JSON.parse(data);
const log = createWriteStream('./docs/EXAMPLES.md', { flags: 'w' });

const iterator = new RecursiveIterator(docs);

let value;
let section = '';
let currentClass = '';
const lines = [
  '# Examples',
  '',
];

// Group by module
const sections = {};

const exampleFilter = (tag) => tag.tag === '@example';

const remarksFilter = (tag) => tag.tag === '@remarks';

const getExamples = (node) => node
  .signatures[0]
  .comment
  ?.blockTags
  ?.filter(exampleFilter);

const formatBlocks = (examples) => examples.map(
  ({ content }) => [
    ...content.map(({ text }) => text),
    '',
  ],
).flat();

let complete = false;
do {
  value = iterator.next();
  complete = value.done;
  if (complete) {
    break;
  }

  const { parent, key } = value.value || {};

  // We set the section name to the module
  if (parent.kind === ReflectionKind.Module) {
    section = parent.name;
    sections[section] = sections[section] || {
      name: section,
      classes: {},
    };
    continue;
  }

  if (parent.kind === ReflectionKind.Class
    && !Object.hasOwn(sections[section].classes, parent.name)) {
    currentClass = parent.name;
    sections[section].classes[currentClass] = {
      name: currentClass,
      classExamples: [
        `### ${currentClass} Class`,
        '',

        ...[ (parent?.comment?.summary || []).map(({ text }) => text), '' ].flat(),
        ...formatBlocks(
          parent.comment?.blockTags?.filter(remarksFilter) || [],
        ).flat(),
        ...formatBlocks(
          parent.comment?.blockTags?.filter(exampleFilter) || [],
        ).flat(),
      ],
      examples: [],
    };
    continue;
  }

  // We don't want to include anything that isn't a function or method
  if (![
    ReflectionKind.ConstructorSignature,
    ReflectionKind.Constructor,
    ReflectionKind.Function,
    ReflectionKind.Method,
  ].includes(parent.kind)) {
    continue;
  }

  // We want to skip inherited methods
  if (key !== 'variant'
    || !Object.hasOwn(parent, 'signatures')
    || Object.hasOwn(parent, 'inheritedFrom')) {
    continue;
  }

  // Add examples if they exist
  const examples = getExamples(parent) || [];
  if (examples.length < 1) {
    continue;
  }

  const name = parent.name !== 'constructor' ? parent.name : currentClass;

  sections[section].classes[currentClass].examples = [
    ...sections[section].classes[currentClass].examples,
    `#### ${name}`,
    '',
    parent.signatures[0].comment.summary[0].text,
    '',
    ...formatBlocks(examples),
  ];
} while (!complete);

Object.values(sections).forEach(({ name, classes }) => {
  Object.values(classes).forEach( ({ examples, classExamples }) => {
    if (examples.length < 1) {
      return;
    }
    lines.push(`## ${name} Package`);
    lines.push('');
    lines.push(classExamples.flat());
    lines.push('');
    lines.push(examples.flat());
  });
});

for (const line of lines.flat()) {
  log.write(`${line}\n`);
}

log.end();
