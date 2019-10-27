import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@IonicPage()
@Component({
    selector: 'page-diaria',
    templateUrl: 'diaria.html',
})
export class DiariaPage {

    data: any;
    eventSource = [];
    calendar = {
        mode: 'month',
        currentDate: new Date()
    }

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams){
        
    }

    onEventSelected(event){
        console.log(event);
    }

    onViewTitleChanged(event){
        console.log(event);
    }

    onTimeSelected(event){
        this.data = event.selectedTime;
        /* console.log(this.convert(this.data)); */
    }

    convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    nextPage(){
        this.navCtrl.push('ViagemPage', {data: this.convert(this.data)});
    }
}