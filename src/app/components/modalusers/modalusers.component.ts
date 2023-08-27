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
  newUser: any = {
    firstname: '',
    lastname: '',
    email: '',
    password: '', 
    isadmin: false
  };
  modalRef: BsModalRef | undefined;

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
    this.apiService.postData(this.newUser).subscribe(
      () => {
        // Limpia los campos del formulario
        this.newUser = {
          firstname: '',
          lastname: '',
          email: '',
          passwd: '', // Puedes dejarlo vacío si no es necesario
          isadmin: false // Puedes establecerlo en false si no es necesario
        };
        // Actualiza la lista después de agregar
        this.loadData();
      },
      (error: any) => {
        console.error('Error al agregar usuario:', error);
      }
    );
  }
}