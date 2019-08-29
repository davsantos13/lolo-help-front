import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome: [null , [Validators.required]],
        idLegal:[null, [Validators.required]],
        dataNascimento: [null, [Validators.required]],
        telefone:[null, []], 
        email: [null , [Validators.required, Validators.email]]
      });
  }

  signUpUser(){
    console.log(this.formGroup.value);
  }
}
