import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgroundnoiseComponent } from './components/backgroundnoise/backgroundnoise.component';
import { MaincardComponent } from './components/maincard/maincard.component';
import { ProjectscardsComponent } from './components/projectscards/projectscards.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BackgroundnoiseComponent,
    MaincardComponent,
    ProjectscardsComponent,
    SkillsComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
