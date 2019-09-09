import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Credenciais } from '../../domain/credenciais';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    console.log(this.credenciais);
  }

}
