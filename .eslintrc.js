module.exports = {
  extends: ['next/core-web-vitals', 'next'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'no-unused-vars': 'error'
  }
};
