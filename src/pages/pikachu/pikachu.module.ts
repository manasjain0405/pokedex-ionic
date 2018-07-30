import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PikachuPage } from './pikachu';

@NgModule({
  declarations: [
    PikachuPage,
  ],
  imports: [
    IonicPageModule.forChild(PikachuPage),
  ],
})
export class PikachuPageModule {}
