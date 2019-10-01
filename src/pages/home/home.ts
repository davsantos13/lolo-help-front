import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menu: MenuController) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }

  showPageSignUp() {
    this.navCtrl.push('SignupPage');
  }

  showPageLogin() {
    this.navCtrl.push('LoginPage');
  }

}
