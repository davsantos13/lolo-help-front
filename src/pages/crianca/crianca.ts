import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-crianca',
  templateUrl: 'crianca.html',
})
export class CriancaPage {

  formCrianca: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController) {

      this.formCrianca = this.formBuilder.group({
        nome: [null],
        dataNascimento: [null],
        alergias: [null],
        alimentos:[null],
        horaMaxima:[null]
      });
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
      ]
    });
    alertAlergia.present();
  }

  chooseAlimentos(){
    let alertAlimentos = this.alertCtrl.create({
      subTitle: 'Cateogoria',
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
      ]
    });
    alertAlimentos.present();
  }

}
