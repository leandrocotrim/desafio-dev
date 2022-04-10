import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MenuComponent } from './components/menu/menu.component';
import { FileUploadService } from './services/file-upload.service';
import { CnabLojaService } from './services/cnab-loja.service';
import { CnabLojaComponent } from './components/cnab-loja/cnab-loja.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    FileUploadComponent,
    CnabLojaComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FileUploadService, CnabLojaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
