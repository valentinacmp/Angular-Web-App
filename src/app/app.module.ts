import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, appRoutingProviders, routing } from './app.routing';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { QualificationComponent } from './components/qualification/qualification.component';

import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
// import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AboutMeComponent,
    ProjectsComponent,
    NewProjectComponent,
    ContactComponent,
    SkillsComponent,
    QualificationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    // SwiperModule,
    routing,
    // SwiperModule
  ],
  providers: [
    RouterModule,
    // AppRoutingModule,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
