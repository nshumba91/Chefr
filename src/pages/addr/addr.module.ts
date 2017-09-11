import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddrPage } from './addr';

@NgModule({
  declarations: [
    AddrPage,
  ],
  imports: [
    IonicPageModule.forChild(AddrPage),
  ],
})
export class AddrPageModule {}
