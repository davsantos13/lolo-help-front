import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";

@IonicPage()
@Component({
    selector: 'page-diaria',
    templateUrl: 'diaria.html',
})
export class DiariaPage {

    constructor(public navCtrl: NavController, public navParams: NavParams){
        
    }
}