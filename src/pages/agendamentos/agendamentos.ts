import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendamentoService } from '../../services/agendamento.service';
import { Agendamento } from '../../domain/agendamento';

@IonicPage()
@Component({
  selector: 'page-agendamentos',
  templateUrl: 'agendamentos.html',
})
export class AgendamentosPage {

  agendamentos: Agendamento[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public agendamentoService: AgendamentoService) {
  }

  ionViewDidLoad() {
    this.agendamentoService.findAll()
        .subscribe(response => {
          console.log(response);
          this.agendamentos = response as Agendamento[];
        }, error => {
          
        });
  }

}
