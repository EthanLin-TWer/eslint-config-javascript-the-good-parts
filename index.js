const error = 'error'

module.exports = {
  env: {
    es6: true,
  },
  plugins: ['import'],
  rules: {
    'no-new-object': error,
  },
}
