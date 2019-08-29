import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CepService } from '../../services/cep.service';


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
    public formBuilder: FormBuilder,
    public cepService: CepService) {

      this.formGroup = this.formBuilder.group({
        nome: [null , [Validators.required]],
        idLegal:[null, [Validators.required]],
        dataNascimento: [null, [Validators.required]],
        telefone:[null, []], 
        email: [null , [Validators.required, Validators.email]],
        cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        rua: [null],
        complemento: [null],
        numero: [null],
        bairro:[null],
        cidade:[null, Validators.required],
        uf: [null, Validators.required]
      });
  }

  signUpUser(){
    console.log(this.formGroup.value);
  }

  buscaCep(){
    let valueCep = this.formGroup.controls['cep'].value;
    let isValid = this.formGroup.controls['cep'].valid;

    if(isValid){
      this.cepService.findCep(valueCep)
              .subscribe((response) => {
                  this.setDataCep(response);
              }, error => {

              });
    }
  }

  setDataCep(data : any){
    this.formGroup.controls['rua'].setValue(data.logradouro);
    this.formGroup.controls['complemento'].setValue(data.complemento);
    this.formGroup.controls['bairro'].setValue(data.bairro);
    this.formGroup.controls['cidade'].setValue(data.localidade);
    this.formGroup.controls['uf'].setValue(data.uf);
  }
}
