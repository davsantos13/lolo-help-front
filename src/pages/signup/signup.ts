import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CepService } from '../../services/cep.service';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../domain/cliente';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  cliente: Cliente;


  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cepService: CepService,
    public clienteService: ClienteService,
    public alertCtrl: AlertController) {

    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required]],
      idLegal: ['', [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      telefone: ['', []],
      email: ['', [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        rua: [null],
        complemento: [''],
        numero: [null],
        bairro: [null],
        cidade: [null, Validators.required],
        uf: [null, Validators.required]
      })
    });
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }


  signUpUser() {
    this.clienteService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
        error => {

        });
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: "Sucesso",
      message: "Cadastro efetuado com sucesso",
      enableBackdropDismiss: false,
      cssClass: 'alert-success',
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  buscaCep() {
    let valueCep = this.formGroup.controls['endereco'].get('cep').value;
    let isValid = this.formGroup.controls['endereco'].get('cep').valid;
    if (isValid) {
      this.cepService.findCep(valueCep)
        .subscribe((response) => {
          this.setDataCep(response);
        }, (error) => {
          console.log(error);
        });
    }
  }

  setDataCep(data: any) {
    this.formGroup.controls['endereco'].get('rua').setValue(data.logradouro);
    this.formGroup.controls['endereco'].get('complemento').setValue(data.complemento);
    this.formGroup.controls['endereco'].get('bairro').setValue(data.bairro);
    this.formGroup.controls['endereco'].get('cidade').setValue(data.localidade);
    this.formGroup.controls['endereco'].get('uf').setValue(data.uf);
  }
}
