import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BackendapiService } from 'src/app/services/backendapi.service';

@Component({
  selector: 'app-modalusers',
  templateUrl: './modalusers.component.html',
  styleUrls: ['./modalusers.component.css']
})
export class ModalusersComponent {
  
  data: any[] = [];
  modalRef: BsModalRef | undefined;

  constructor(
    private apiService: BackendapiService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getData().subscribe((response: any) => {
      this.data = response;
    });
  }

  refreshData() {
    this.loadData();
  }

}
