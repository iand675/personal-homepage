module.exports = {
  plugins: [
    "tailwindcss",
    'postcss-preset-env',
    [
      '@fullhuman/postcss-purgecss',
      process.env.NODE_ENV === 'production'
        ? {
          content: [
            './pages/**/*.js', 
            './components/**/*.js', 
            './layouts/**/*.js', 
            './pages/**/*.tsx', 
            './components/**/*.tsx',
            './layouts/**/*.tsx', 
            './pages/**/*.mdx', 
            './components/**/*.mdx',
            './layouts/**/*.mdx',
          ],
          whitelist: ['html', 'body'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }
        : false,
    ],
  ]
};
