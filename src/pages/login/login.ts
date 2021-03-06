import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';
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

  @ViewChild('divEmail') divEmail: ElementRef;
  cliente: Cliente;

  credenciais: Credenciais = {
    email: "",
    senha: ""
  };

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public navParams: NavParams,
    public auth: AuthService,
    public clienteService: ClienteService,
    public renderer: Renderer2) {
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }

  changeClass() {
    this.renderer.removeClass(this.divEmail.nativeElement, 'animated');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  login() {
    this.auth.authenticate(this.credenciais)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.loadCliente();
      }, error => {

      });
  }

  loadCliente() {
    this.clienteService.findByEmail(this.credenciais.email)
      .subscribe(response => {
        console.log(response);
        this.cliente = response;

        if (this.cliente.firstTimeLogin == true) {
          this.navCtrl.setRoot('FeedPage', { cli: this.cliente.id });
          this.cliente.firstTimeLogin = false;
          this.clienteService.update(this.cliente)
            .subscribe(response => {
              console.log('cliente atualizado');
              console.log(response);
            }, error => {

            });
        } else {
          this.navCtrl.setRoot('CriancasPage', { cli: this.cliente.id });
        }


      }, error => {

      });
  }

}
