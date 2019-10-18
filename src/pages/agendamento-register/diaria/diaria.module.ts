import { NgModule } from "@angular/core";
import { DiariaPage } from "./diaria";
import { IonicPageModule } from "ionic-angular";

@NgModule({
    declarations: [
        DiariaPage,
    ],
    imports: [
        IonicPageModule.forChild(DiariaPage),
    ],
})
export class DiariaPageModule {}