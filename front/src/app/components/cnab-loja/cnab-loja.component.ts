import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'desafio-cnab-loja',
  templateUrl: './cnab-loja.component.html',
  styleUrls: ['./cnab-loja.component.scss']
})
export class CnabLojaComponent implements OnInit {

  file: File | undefined;
  showMessage: boolean | undefined;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  onSend(): void {
    this.fileUploadService
      .send(this.file)
      .subscribe(this.sendResponse);
  }

  sendResponse({ ok }: {ok: boolean}) {
    this.showMessage = ok;
  }
}
