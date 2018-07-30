import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulbasaurPage } from './bulbasaur';

@NgModule({
  declarations: [
    BulbasaurPage,
  ],
  imports: [
    IonicPageModule.forChild(BulbasaurPage),
  ],
})
export class BulbasaurPageModule {}
