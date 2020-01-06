import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import progress from 'rollup-plugin-progress';
import builtins from 'rollup-plugin-node-builtins';

let pluginOptions = [
  builtins(),
  resolve({
    jsnext: true,
    browser: true
  }),
  commonjs(),
  progress(),
  babel({
    exclude: 'node_modules/**',
  }),
  filesize({
    showGzippedSize: false,
  })
];

export default [{
  input: './index.js',
  output: {
    name: 'normalize-url',   // for external calls (need exports)
    file: 'dist/index.min.js',
    format: 'umd',
    sourcemap: true,
    exports: 'named',
    amd: { id: 'normalize-url' }
  },
  plugins: pluginOptions,
}];
