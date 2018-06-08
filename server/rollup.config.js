import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/widget/widget.module.ts',
  output: {
    format: 'system',
    file: './dist/bundle.js',
    sourcemap: true
  },
  plugins: [
    resolve({
      browser: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    typescript()
  ],
  external: ['@angular/core']
};
