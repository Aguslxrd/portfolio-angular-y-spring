import { Component, OnInit } from '@angular/core';
import { BackendapiService } from 'src/app/services/backendapi.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: any[] = [];

  constructor(private backendapi: BackendapiService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.backendapi.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
      
    })
  }

}
