module.exports = (config, { options }) => {
  config.module.rules.push({
    test: /\.(tsx|ts|js|jsx)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['babel-plugin-styled-components'],
        },
      },
    ],
  });

  return config;
};
