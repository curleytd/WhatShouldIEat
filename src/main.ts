import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import PubSub from '@aws-amplify/pubsub';
import awsmobile from './aws-exports';
import Amplify, { API } from 'aws-amplify';

Amplify.configure(awsmobile);
API.configure(awsmobile);
PubSub.configure(awsmobile);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
