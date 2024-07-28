import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output:{
        file: 'dist/bundle.js',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        typescript(),
        terser()
    ]
}