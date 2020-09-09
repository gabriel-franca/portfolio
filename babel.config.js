module.exports = {
  presets: ['next/babel', '@babel/preset-typescript'],
  plugins: [
    ['styled-components', { ssr: true }],
    'inline-react-svg',
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
        rootPathPrefix: '~'
      }
    ]
  ]
}
