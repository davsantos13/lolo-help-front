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

  ionViewDidLoad(){
    let id = this.navParams.get('cli');
    this.criancaService.findByCliente(id)
             .subscribe(response => {
                this.criancas = response as Crianca[];
                console.log(this.criancas);
             }, error => {

             });
  }

  criancaDetail(id: any){
    this.navCtrl.push('CriancaDetailPage', {id: id});
  }

}
