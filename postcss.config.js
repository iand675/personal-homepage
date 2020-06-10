module.exports = {
  plugins: [
    "tailwindcss",
    'postcss-preset-env',
    [
      '@fullhuman/postcss-purgecss',
      process.env.NODE_ENV === 'production'
        ? {
          content: ['./pages/**/*.js', './components/**/*.js', './pages/**/*.tsx', './components/**/*.tsx'],
          whitelist: ['html', 'body'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }
        : false,
    ],
  ]
};
