import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './api.service';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from './states/panier.state';
import { routes } from './app.routes';
import { UserState } from './states/user.states';
import { AuthInterceptor } from './auth/auth.interceptor';


export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        ApiService,
        importProvidersFrom(NgxsModule.forRoot([PanierState, UserState])),
        provideHttpClient(withInterceptorsFromDi()),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ]
};