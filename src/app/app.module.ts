import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgroundnoiseComponent } from './components/backgroundnoise/backgroundnoise.component';
import { MaincardComponent } from './components/maincard/maincard.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalusersComponent } from './components/modalusers/modalusers.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArcticcrmModalComponent } from "./components/modals/arcticcrm-modal/arcticcrm-modal.component";
import { ProjectscardsComponent } from './components/projectscards/projectscards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BackgroundnoiseComponent,
    MaincardComponent,
    SkillsComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    LoginformComponent,
    ModalusersComponent,
    ProjectscardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    CommonModule,
    ArcticcrmModalComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
