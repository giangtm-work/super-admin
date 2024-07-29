import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { apiUrlInterceptor, authInterceptor } from '@super-admin/auth-interceptor';
import { TuiRootModule } from '@taiga-ui/core';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    importProvidersFrom(TuiRootModule),
    provideHttpClient(
      withInterceptors([authInterceptor, apiUrlInterceptor]),
    )
  ]
};
