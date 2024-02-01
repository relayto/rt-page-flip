import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const shouldMinify = !(process.env.NODE_ENV == 'dev');

console.log( 'shouldMinify', shouldMinify );

export default [
    {
        input: 'src/PageFlip.ts',
        output: [{ file: 'dist/js/page-flip.browser.js', format: 'umd', name: 'St' }],
        plugins: [
            postcss(),
            typescript({ tsconfig: 'tsconfig.json', useTsconfigDeclarationDir: true }),
            // Only use terser if shouldMinify is true
            ...shouldMinify ? [terser()] : [],
        ],
    },
    {
        input: 'src/PageFlip.ts',
        output: [{ file: 'dist/js/page-flip.module.js', format: 'es' }],
        plugins: [
            postcss(),
            typescript({ tsconfig: 'tsconfig.json', useTsconfigDeclarationDir: true }),
            // Only use terser if shouldMinify is true
            ...shouldMinify ? [terser()] : [],
        ],
    },
];
