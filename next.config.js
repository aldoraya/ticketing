/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  reactStrictMode: false,
  webpack5: true,
  webpack: (config) => {
    config.resolve.feedback = { fs: false };

    return config;
  }
}

const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // You can directly change the antd less variables here
   modifyVars: { "@primary-color": "#20c992",
                 "@checkbox-size": "20px",
                 "@dropdown-selected-color": "@primary-color" },
  // Or better still you can specify a path to a file
  lessVarsFilePath: "./styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},


  webpack(config) {
    return config;
  },
});