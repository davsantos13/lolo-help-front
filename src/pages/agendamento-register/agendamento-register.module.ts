import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendamentoRegisterPage } from './agendamento-register';

@NgModule({
  declarations: [
    AgendamentoRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendamentoRegisterPage),
  ],
})
export class AgendamentoRegisterPageModule {}
