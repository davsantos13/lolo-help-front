
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
@IonicPage()
@Component({
    selector: 'page-viagem',
    templateUrl: 'viagem.html',
})
export class ViagemPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad(){
       console.log('A data: ',this.navParams.get('data'));

    }
}
