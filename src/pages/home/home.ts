import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagedata;

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, private camera: Camera, private socialSharing: SocialSharing) {
  }
uploadPressed(){
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Share Picture',
    buttons: [
      {
        text: 'Facebook',
        handler: () => {
          // Check if sharing via email is supported
         this.socialSharing.shareViaFacebook("Ionic upload 1st Try", this.imagedata).then(() => {
         // Sharing via email is possible
         }).catch(() => {
  // Sharing via email is not possible
});
          console.log('Facebook clicked');
        }
      },{
        text: 'Instagram',
        handler: () => {
          // Check if sharing via email is supported
          this.socialSharing.shareViaInstagram("Ionic upload 1st Try", this.imagedata).then(() => {
          // Sharing via email is possible
         }).catch(() => {
        // Sharing via email is not possible
});
          console.log('Instagram clicked');
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
cameraPressed(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64:
   let base64Image = 'data:image/jpeg;base64,' + imageData;
   this.imagedata = base64Image;
  }, (err) => {
   // Handle error
  });
}
}
