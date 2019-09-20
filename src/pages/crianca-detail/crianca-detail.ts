import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CriancaService } from '../../services/crianca.service';
import { Crianca } from '../../domain/crianca';

@IonicPage()
@Component({
  selector: 'page-crianca-detail',
  templateUrl: 'crianca-detail.html',
})
export class CriancaDetailPage {

  crianca: Crianca = {
    alergias: [""],
    alimentos: [""],
    dataNascimento: null,
    horaMaxima: null,
    id: "",
    nome: ""
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public criancaService: CriancaService) {

      this.findCrianca();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriancaDetailPage');
  }

  findCrianca(){
    let id = this.navParams.get('id');
    this.criancaService.findById(id)
          .subscribe(response => {
            this.crianca = response as Crianca;
            console.log(this.crianca);
          }, error => {

          });
  }

}
