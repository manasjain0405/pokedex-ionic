import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SnorlaxPage} from '../snorlax/snorlax';
import {PikachuPage} from '../pikachu/pikachu';
import {BulbasaurPage} from '../bulbasaur/bulbasaur';
import {CharmenderPage} from '../charmender/charmender';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  OpenSnorlaxPage(){
  	this.navCtrl.push(SnorlaxPage);
  }
  OpenPikachuPage(){
  	this.navCtrl.push(PikachuPage);
  }
  OpenBulbasaurPage(){
  	this.navCtrl.push(BulbasaurPage);
  }
  OpenCharmenderPage(){
  	this.navCtrl.push(CharmenderPage);
  }
}
