import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public formBuilder: FormBuilder) {

      this.formCrianca = this.formBuilder.group({
        nome: [null],
        dataNascimento: [null],
        alergias: [null],
        alimentos:[null],
        horaMaxima:[null]
      });
  }

  ionViewDidLoad() {
    
  }

}
