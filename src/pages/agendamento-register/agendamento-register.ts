import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-agendamento-register',
  templateUrl: 'agendamento-register.html',
})
export class AgendamentoRegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  showPageDiaria() {
    this.navCtrl.push('DiariaPage');
  }

  showPageViagem(){
    this.navCtrl.push('ViagemPage');
  }

}
