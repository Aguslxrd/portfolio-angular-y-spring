import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgroundnoiseComponent } from './components/backgroundnoise/backgroundnoise.component';
import { MaincardComponent } from './components/maincard/maincard.component';
import { ProjectscardsComponent } from './components/projectscards/projectscards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BackgroundnoiseComponent,
    MaincardComponent,
    ProjectscardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
