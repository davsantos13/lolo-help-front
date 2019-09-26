import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { LocalUser } from '../../domain/local_user';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../domain/cliente';
import { CriancaService } from '../../services/crianca.service';

@IonicPage()
@Component({
  selector: 'page-crianca',
  templateUrl: 'crianca.html',
})
export class CriancaPage {

  formCrianca: FormGroup;
  user: LocalUser = {
    token: "",
    email: ""
  };

  cliente: Cliente;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public storage: StorageService,
    public clienteService: ClienteService,
    public criancaService: CriancaService) {

      this.formCrianca = this.formBuilder.group({
        nome: [null],
        dataNascimento: [null],
        alergias: [null],
        alimentos:[null],
        horaMaxima:[null],
        descricao:[null]
      });
  }

  ionViewDidLoad(){
    this.findPais();

    console.log(this.cliente);
  }

  chooseAlergias(){
    let alertAlergia = this.alertCtrl.create({
      subTitle: 'Alegias',
      inputs: [
        {
          type: 'checkbox',
          label: 'Rinite Alérgica',
          value: 'Rinite'
        },
        {
          type: 'checkbox',
          label: 'Alimentar',
          value: 'Alimentar'
        }, 
        {
          type: 'checkbox',
          label: 'Contatos com a pele',
          value: 'Contato'
        },
        {
          type: 'checkbox',
          label: 'Outros',
          value: 'Outros'
        }
      ],
      buttons: [
        {
          text: 'Confirmar',
          handler: (dados) => {
            console.log(dados);
            this.formCrianca.controls['alergias'].setValue(dados);
          }
        }
      ],
      cssClass: 'alert-success'
    });
    alertAlergia.present();
  }

  chooseAlimentos(){
    let alertAlimentos = this.alertCtrl.create({
      subTitle: 'Categoria',
      inputs: [
        {
          type: 'checkbox',
          label: 'Carboidratos',
          value: 'Carboidratos'
        },
        {
          type: 'checkbox',
          label: 'Verduras e Legumes',
          value: 'Verduras Legumes'
        }, 
        {
          type: 'checkbox',
          label: 'Frutas',
          value: 'Frutas'
        },
        {
          type: 'checkbox',
          label: 'Leite e derivados',
          value: 'Leite derivados'
        },
        {
          type: 'checkbox',
          label: 'Carnes e Ovos',
          value: 'Carnes Ovos'
        },
        {
          type: 'checkbox',
          label: 'Carnes e Ovos',
          value: 'Carnes Ovos'
        },
        {
          type: 'checkbox',
          label: 'Leguminosas e oleaginosas',
          value: 'Leguminosas oleaginosas'
        },
        {
          type: 'checkbox',
          label: 'Óleos e Gorduras',
          value: 'Oleos Gorduras'
        },
        {
          type: 'checkbox',
          label: 'Açúcares e Doces',
          value: 'Acucares Doces'
        },
        {
          type: 'checkbox',
          label: 'Outros',
          value: 'Outros'
        }
      ],
      buttons: [
        {
          text: 'Confirmar',
          handler: (dados) => {
            console.log(dados);
            this.formCrianca.controls['alimentos'].setValue(dados);
          }
        }
      ],
      cssClass: 'alert-success'
    });
    alertAlimentos.present();
  }

  findPais(){
    this.user = this.storage.getLocalUser();
    console.log(this.user);
    this.clienteService.findByEmail(this.user.email)
                 .subscribe(response => {
                    this.cliente = response as Cliente;
                    console.log(this.cliente);
                 }, error => {

                 });
  }

  signUpCrianca(){
    console.log(this.formCrianca.value)
    this.criancaService.insert(this.formCrianca.value, this.cliente.id)
                        .subscribe(response => {
                          console.log(response);
                          this.successSignupCrianca();
                        }, error => {

                        });
  }

  successSignupCrianca(){
    let alertSignUp = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Criança cadastrada com sucesso',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.push('CriancasPage', {cli: this.cliente.id});
        }
      }],
      cssClass: 'alert-success'
    });
    alertSignUp.present();
  }

}
