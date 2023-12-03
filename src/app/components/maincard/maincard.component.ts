import { Component } from '@angular/core';

@Component({
  selector: 'app-maincard',
  templateUrl: './maincard.component.html',
  styleUrls: ['./maincard.component.css']
})
export class MaincardComponent {


  enviarCorreo() {
    window.open('mailto:suffodamian02@gmail.com');
  }

}
