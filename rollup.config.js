import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const banner = `/*
 (c) 2014, Vladimir Agafonkin
 simpleheat, a tiny JavaScript library for drawing heatmaps with Canvas
 https://github.com/mourner/simpleheat
*/
/*
 (c) 2014, Vladimir Agafonkin
 (c) 2026, daishu0000 <daishu10000@gmail.com>
 Leaflet.heat, a tiny and fast heatmap plugin for Leaflet.
 https://github.com/daishu0000/Leaflet.heat
*/`;

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/leaflet-heat.js',
    format: 'iife',
    globals: { L: 'L' },
    banner
  },
  external: ['L'],
  plugins: [
    nodeResolve(),
    commonjs(),
    terser({
      compress: {},
      mangle: true,
      format: {
        comments: (node, { value }) => /\(c\)|copyright|license|leaflet\.heat|simpleheat|github\.com/i.test(value)
      }
    })
  ]
};
