import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
  entry: './src/widget/widget.module.ts',
  output: {
    format: 'system',
    file: './dist/bundle.js'
  },
  plugins: [
    typescript(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    })
  ],
  external: ['@angular/core', '@angular/common', 'rxjs']
};
