import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { BackendapiService } from 'src/app/services/backendapi.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

  credentials = {
    email: '',
    passwd: ''
  };

  constructor(private authService: AuthService, private router: Router, private backendService: BackendapiService) {}

  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        if (response && response.token) {
          this.authService.setToken(response.token);
          this.router.navigate(['/admin']);
        }
      },
      error => {
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }
  
  onLoginFormSubmit(email: string, passwd: string): void {
    const credentials = {
      email: email,
      passwd: passwd
    };
    this.authService.login(credentials).subscribe(
      (response: any) => {
        if (response && response.token) {
          this.authService.setToken(response.token);
          this.router.navigate(['/admin']);
        }
      },
      error => {
        console.error('Error de inicio de sesión:', error);
      }
    );
  }
}