import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
