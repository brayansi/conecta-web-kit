import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['conecta-input[type=text]', 'conecta-input[type=email]', 'conecta-input[type=password]', 'conecta-input[type=number]', 'conecta-input[type=tel]', 'conecta-input[type=url]'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['conecta-checkbox'],
    event: 'checkboxChange',
    targetAttr: 'checked',
    type: 'boolean',
  },
  {
    elementSelectors: ['conecta-select'],
    event: 'selectChange',
    targetAttr: 'value',
    type: 'text',
  },
];

export const config: Config = {
  namespace: 'conecta-web-kit',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      generateTypeDeclarations: true,
      externalRuntime: false,
    },
    angularOutputTarget({
      componentCorePackage: '@conecta.fit/conecta-web-kit-core/dist',
      outputType: 'standalone',
      directivesProxyFile: '../conecta-web-kit-angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../conecta-web-kit-angular/projects/component-library/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-readme',
    },
  ],
  plugins: [sass()],
  globalStyle: 'src/index.scss',
  minifyCss: true,
  minifyJs: true,
  testing: {
    browserHeadless: 'shell',
  },
};
