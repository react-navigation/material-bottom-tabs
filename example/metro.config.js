/* eslint-disable import/no-commonjs, import/no-extraneous-dependencies */

const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');
const pak = require('../package.json');
const escape = require('escape-string-regexp');

const dependencies = Object.keys(pak.dependencies);
const peerDependencies = Object.keys(pak.peerDependencies);

module.exports = {
  projectRoot: __dirname,
  watchFolders: [path.resolve(__dirname, '..')],

  resolver: {
    blacklistRE: blacklist([
      new RegExp(
        `^${escape(path.resolve(__dirname, '..', 'node_modules'))}\\/.*$`
      ),
    ]),

    providesModuleNodeModules: [
      '@expo/vector-icons',
      '@babel/runtime',
      ...dependencies,
      ...peerDependencies,
    ],
  },
};
