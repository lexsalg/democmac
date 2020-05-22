import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment as env } from './environments/environment';

import { hmrBootstrap } from './hmr';

import 'hammerjs';

if (env.production) enableProdMode();

const bootstrap = () => {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule, {
      defaultEncapsulation: ViewEncapsulation.Emulated
    })
    .then((res) => {
      if ((window as any).appBootstrap) {
        (window as any).appBootstrap();
      }
      return res;
    });
};

if (env.hmr) {
  // tslint:disable-next-line: no-string-literal
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}
