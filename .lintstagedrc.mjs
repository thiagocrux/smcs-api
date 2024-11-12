export default {
  '*.{js,ts,mjs,mts}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `vitest related --run ${filenames.join(' ')}`,
  ],
};
