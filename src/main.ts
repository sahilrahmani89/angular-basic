import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import { MainComponent } from './app/main.component';


bootstrapApplication(MainComponent, {providers:[provideRouter(routes, withComponentInputBinding())]})
  .catch((err) => console.error(err));
