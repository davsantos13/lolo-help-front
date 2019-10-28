import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePtBr);

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CepService } from '../services/cep.service';
import { ClienteService } from '../services/cliente.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptor';
import { CriancaService } from '../services/crianca.service';
import { BabaService } from '../services/baba.service';
import { AgendamentoService } from '../services/agendamento.service';
import { ErrorInterceptor } from '../interceptors/error-interceptor';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CepService,
    ClienteService,
    CriancaService,
    BabaService,
    AgendamentoService,
    AuthInterceptorProvider,
    AuthService,
    StorageService,
    ErrorInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ]
})
export class AppModule { }
