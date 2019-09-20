import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriancasPage } from './criancas';

@NgModule({
  declarations: [
    CriancasPage,
  ],
  imports: [
    IonicPageModule.forChild(CriancasPage),
  ],
})
export class CriancasPageModule {}
