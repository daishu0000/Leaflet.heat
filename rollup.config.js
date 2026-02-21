import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/leaflet-heat.js',
    format: 'iife',
    globals: { L: 'L' }
  },
  external: ['L'],
  plugins: [
    nodeResolve(),
    commonjs(),
    terser({ compress: {}, mangle: true })
  ]
};
