import { NgModule } from "@angular/core";
import { DiariaPage } from "./diaria";
import { NgCalendarModule } from 'ionic2-calendar';
import { IonicPageModule } from "ionic-angular";


@NgModule({
    declarations: [
        DiariaPage,
    ],
    imports: [
        NgCalendarModule,
        IonicPageModule.forChild(DiariaPage)
    ],
})
export class DiariaPageModule {}