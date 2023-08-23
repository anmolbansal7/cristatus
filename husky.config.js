// eslint-disable-next-line no-undef
module.exports = {
  hooks: {
    'pre-commit': 'cd cristatus-app && pnpm run lint-staged && pnpm test',
  },
};
