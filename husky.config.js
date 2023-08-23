// eslint-disable-next-line no-undef
module.exports = {
  hooks: {
    'pre-commit': 'cd documentation && pnpm run lint-staged && pnpm test',
  },
};
