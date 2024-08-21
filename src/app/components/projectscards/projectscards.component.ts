import { Component } from '@angular/core';

@Component({
  selector: 'app-projectscards',
  templateUrl: './projectscards.component.html',
  styleUrls: ['./projectscards.component.css']
})
export class ProjectscardsComponent {
  
  isModalVisible: boolean = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
