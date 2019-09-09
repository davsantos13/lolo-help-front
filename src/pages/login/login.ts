import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Credenciais } from '../../domain/credenciais';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credenciais: Credenciais = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthService) {
  }

  login(){
    this.auth.authenticate(this.credenciais)
    .subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('BabaPage'); 
    }, error => {
      
    });
  }

}
