import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

newFunction();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  function newFunction() {
  if (environment.production) {
    enableProdMode();
  }
}

