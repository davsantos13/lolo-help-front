import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabaRegisterPage } from './baba-register';

@NgModule({
  declarations: [
    BabaRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(BabaRegisterPage),
  ],
})
export class BabaRegisterPageModule {}
