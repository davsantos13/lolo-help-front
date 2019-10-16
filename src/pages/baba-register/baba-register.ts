import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-baba-register',
  templateUrl: 'baba-register.html',
})
export class BabaRegisterPage {

  formBaba: FormGroup;
  idiomas: string[] = ['Português', 'Espanhol', 'Inglês', 'Francês'];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formBaba = this.formBuilder.group({
        passaporte: [false],
        idiomas: this.formBuilder.group({
          descricao:  ['']
        }),
        aceitaViagem: [null],
        cursos: this.formBuilder.group({
          nome: [null],
          descricao: [null]
        })
      });
  }

  ionViewDidLoad() {
    
  }

}
