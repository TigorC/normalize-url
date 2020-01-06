import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import commonjs from 'rollup-plugin-commonjs';
import progress from 'rollup-plugin-progress';
import builtins from 'rollup-plugin-node-builtins';

let pluginOptions = [
	builtins(),
  commonjs(),
  progress(),
	babel({
		babelrc: false,
		presets: [
			[
				"@babel/preset-env",
				{
					"targets": {
						"browsers":  [
							"last 1 version",
							"> 1%"
						]
					},
					"loose": true,
					"modules": false,
					"useBuiltIns": false,
					debug: true
				}
			],
		]
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
    amd: { id: 'normalize-url' },
  },
  plugins: pluginOptions,
}];
