module.exports = {
  branches: ['main', 'beta'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'pnpm-lock.yaml', 'CHANGELOG.md'],
        /* eslint-disable-next-line no-template-curly-in-string */
        message:
          'chore(release): 🎉 publish v${nextRelease.version} 🎉\n\n${nextRelease.notes}\n\n[skip ci]',
      },
    ],
  ],
};