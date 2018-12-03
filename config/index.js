const path = require('path');
const isBuildUI = process.env.TARO_BUILD_TYPE === 'ui';

const config = {
  projectName: 'taro_my_calendor',
  date: '2018-11-23',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: isBuildUI ? 'cat-ui': 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    }
  },
  defineConstants: {
  },
  copy: {
    patterns: [
      {
        from: 'cloud-functions/',
        to: 'dist/cloud-functions/'
      }
    ],
    options: {
    }
  },
  weapp: {
    module: {
      postcss: {
        module: {
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {

          }
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }

  // h5 build UI
  if (isBuildUI) {
    Object.assign(config.h5, {
      enableSourceMap: false,
      enableExtract: false,
      enableDll: false
    })
    config.h5.webpackChain = chain => {
      chain.plugins.delete('htmlWebpackPlugin')
      chain.plugins.delete('addAssetHtmlWebpackPlugin')
      chain.merge({
        output: {
          path: path.join(process.cwd(), 'cat-ui', 'h5'),
          filename: 'index.js',
          libraryTarget: 'umd',
          library: 'cat-ui'
        },
        externals: {
          nervjs: 'commonjs2 nervjs',
          classnames: 'commonjs2 classnames',
          '@tarojs/components': 'commonjs2 @tarojs/components',
          '@tarojs/taro-h5': 'commonjs2 @tarojs/taro-h5',
          'weui': 'commonjs2 weui'
        }
      })
    }
  }

  return merge({}, config, require('./prod'))
  
}
