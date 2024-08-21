import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-arcticcrm-modal',
  standalone: true,
  imports: [],
  templateUrl: './arcticcrm-modal.component.html',
  styleUrl: './arcticcrm-modal.component.css'
})
export class ArcticcrmModalComponent{
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
