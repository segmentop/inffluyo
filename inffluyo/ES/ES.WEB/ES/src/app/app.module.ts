import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_shared/Components/header/header.component';
import { PrincipalComponent } from './_shared/Layouts/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
