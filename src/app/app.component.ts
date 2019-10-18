import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public auth: AuthService,
    public storage: StorageService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
     // { title: 'Home', component: 'HomePage' },
     // { title: 'Início', component: 'FeedPage'},
      { title: 'Agendamentos', component: 'AgendamentosPage'},
      { title: 'Crianças', component: 'CriancasPage'},
      { title: 'Sair', component: ''}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });
  }

  openPage(page) {
    switch(page.title){
      case 'Sair': 
        this.auth.logout();
        this.nav.setRoot('HomePage');
      break;

      default:
        this.storage.getLocalUser();
        this.nav.setRoot(page.component);
    }

    
  }
}
