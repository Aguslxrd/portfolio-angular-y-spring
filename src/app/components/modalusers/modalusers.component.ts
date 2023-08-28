import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BackendapiService } from 'src/app/services/backendapi.service';


@Component({
  selector: 'app-modalusers',
  templateUrl: './modalusers.component.html',
  styleUrls: ['./modalusers.component.css']
})
export class ModalusersComponent implements OnInit {
  
  data: any[] = [];
  newUser: any = {
    firstname: '',
    lastname: '',
    email: '',
    password: '', 
    isadmin: false
  };
  modalRef: BsModalRef | undefined;
  editUser: any = {};
  editingUserId: number | null = null;

  constructor(
    private apiService: BackendapiService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getData().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: any) => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }

  refreshData() {
    this.loadData();
  }

  deleteUser(userId: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.apiService.deleteData(userId).subscribe(
        () => {
          // Actualiza la lista después de eliminar
          this.loadData();
        },
        (error: any) => {
          console.error('Error al eliminar usuario:', error);
        }
      );
    }
  }

  submitForm() {
    if (this.editingUserId !== null) {
      this.apiService.putData(this.editingUserId, this.editUser).subscribe(() => {
        this.refreshData();
        this.editingUserId = null; // Reset editing state
        this.editUser = {}; // Clear edit form
      });
    } else {
      this.apiService.postData(this.newUser).subscribe(() => {
        this.refreshData();
        this.newUser = {}; // Clear add form
      });
    }
  }

  editUserForm(userId: number) {
    // Find the user by ID and populate the edit form
    const userToEdit = this.data.find(user => user.id === userId);
    if (userToEdit) {
      this.editingUserId = userId;
      this.editUser = { ...userToEdit }; // Copy the user's data to the editUser object
    }
  }

  cancelEdit() {
    this.editingUserId = null;
    this.editUser = {};
  }
}
