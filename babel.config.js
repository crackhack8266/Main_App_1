module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/common/components',
          screens: './src/screens',
          images: './src/common/assets',
          constants: './src/common/constants',
        },
      },
    ],
  ],
};
