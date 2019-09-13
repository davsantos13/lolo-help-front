import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Credenciais } from '../../domain/credenciais';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { LocalUser } from '../../domain/local_user';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../domain/cliente';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  cliente: Cliente;

  credenciais: Credenciais = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthService,
    public clienteService: ClienteService) {
  }

  login(){
    this.auth.authenticate(this.credenciais)
    .subscribe(response => {
      this.auth.successfulLogin(response.headers.get('Authorization'));
      this.clienteService.findByEmail(this.credenciais.email)
                         .subscribe(response => {
                            console.log(response);
                            this.cliente = response;
                            this.navCtrl.setRoot('FeedPage', {cli: this.cliente.id});
                         });
    }, error => {
      
    });
  }

}
