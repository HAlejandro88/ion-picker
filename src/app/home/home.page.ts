import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  framework = '';

  constructor(private pickerCtrl: PickerController) {}

  async showBasic() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'framework',
          options: [
            {text: 'Angular', value: 'A'},
            {text: 'Vue', value: 'V'},
            {text: 'React', value: 'R'}
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('framework');
      console.log('col',col);
      this.framework = col.options[col.selectedIndex].text;
    })
  }

}
