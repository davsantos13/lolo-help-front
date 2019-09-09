import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabaPage } from './baba';

@NgModule({
  declarations: [
    BabaPage,
  ],
  imports: [
    IonicPageModule.forChild(BabaPage),
  ],
})
export class BabaPageModule {}
