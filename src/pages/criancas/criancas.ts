import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalUser } from '../../domain/local_user';
import { StorageService } from '../../services/storage.service';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../domain/cliente';
import { CriancaService } from '../../services/crianca.service';
import { Crianca } from '../../domain/crianca';

@IonicPage()
@Component({
  selector: 'page-criancas',
  templateUrl: 'criancas.html',
})
export class CriancasPage {

  cliente: Cliente;
  criancas: Crianca[];

  user: LocalUser = {
    email: "",
    token: ""
  };



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService,
    public criancaService: CriancaService) {
  }

  ionViewDidLoad() {
    this.findPais();

  }

  findPais() {
    this.user = this.storage.getLocalUser();
    console.log(this.user);
    return this.clienteService.findByEmail(this.user.email)
      .subscribe(response => {
        this.cliente = response as Cliente;
        console.log(this.cliente);

        this.criancaService.findByCliente(this.cliente.id)
          .subscribe(response => {
            this.criancas = response as Crianca[];
            console.log(this.criancas);
          }, error => {

          });
      }, error => {

      });
  }

  criancaDetail(id: any) {
    this.navCtrl.push('CriancaDetailPage', { id: id });
  }

  addChildren() {
    this.navCtrl.push('CriancaPage');
  }

}
