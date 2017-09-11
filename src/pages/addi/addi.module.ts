import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddiPage } from './addi';

@NgModule({
  declarations: [
    AddiPage,
  ],
  imports: [
    IonicPageModule.forChild(AddiPage),
  ],
})
export class AddiPageModule {}
