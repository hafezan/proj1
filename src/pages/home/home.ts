import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
  }
uploadPressed(){
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Upload Picture',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
        }
      },{
        text: 'Upload',
        handler: () => {
          console.log('Archive clicked');
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}
}
