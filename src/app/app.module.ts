import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ManebodyComponent } from './manebody/manebody.component';

let router : Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path : 'html',
    component : ManebodyComponent
  },
  {
    path : "html/:id",
    component : ManebodyComponent
  },
  {
    path : 'css',
    component : ManebodyComponent
  },
  {
    path : 'javascript',
    component : ManebodyComponent
  },
  {
    path : 'bootstrap',
    component : ManebodyComponent
  },
  {
    path : 'jquery',
    component : ManebodyComponent
  },
  {
    path : 'angular',
    component : ManebodyComponent
  },
  {
    path : 'java',
    component : ManebodyComponent
  },
  {
    path : '**',
    component : ErrorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BodyComponent,
    HomeComponent,
    ErrorComponent,
    ManebodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
