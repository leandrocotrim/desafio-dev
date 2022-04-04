import { CnabLojaComponent } from './components/cnab-loja/cnab-loja.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { component: FileUploadComponent, path: 'file-upload' },
  { component: CnabLojaComponent, path: 'cnab-loja' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
