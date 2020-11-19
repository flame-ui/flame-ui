import { version } from './package.json'

import typescript from 'rollup-plugin-typescript2'

const name = 'flame-ui hooks'
const banner = `/* ${name} version: ${version} */`

const standardOpts = {
  name,
  banner,
  exports: 'named',
  minifyInternalExports: true,
  preserveModules: true,
}

const config = [
  {
    input: './src/index.ts',
    strictDeprecations: true,
    output: [
      { ...standardOpts, dir: 'lib', format: 'cjs' },
      { ...standardOpts, dir: 'lib/esm', format: 'esm' },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
        tsconfigOverride: {
          rootDir: 'src',
          include: ['src/**/*.ts', 'src/**/*.tsx'],
          exclude: [
            'jest.setup.ts',
            '**/*.spec.ts',
            '**/*.spec.tsx',
            '**/*.stories.tsx',
            '**/example*',
          ],
        },
      }),
    ],
  },
]

export default config
