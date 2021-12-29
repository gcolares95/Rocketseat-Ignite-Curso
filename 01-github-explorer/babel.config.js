// exportando a configuração do babel

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic',
    }]
  ]
}
