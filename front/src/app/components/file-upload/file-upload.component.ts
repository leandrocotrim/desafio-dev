import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'desafio-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  file: File | undefined;
  showMessage: boolean | undefined;
  subFileUploadService: Subscription | undefined;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() : void {
    this.subFileUploadService && this.subFileUploadService.unsubscribe();
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  onSend(): void {
    this.subFileUploadService = this.fileUploadService
      .send(this.file)
      .subscribe(this.sendResponse);
  }

  sendResponse({ ok }: {ok: boolean}) {
    this.showMessage = ok;
  }
}
