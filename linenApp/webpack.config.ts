import path from 'path';
import { Configuration } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const config: Configuration = {
  mode:
    (process.env.NODE_ENV as 'production' | 'development' | undefined) ??
    'development',
  entry: './src/entrypoint.tsx',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true, // Enable SVGO optimization
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
};

export default config;
