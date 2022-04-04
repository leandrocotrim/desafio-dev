import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  send(file: File | undefined): Observable<{ok: boolean}> {
    const formData = new FormData();
    formData.append('file', file!);

    return this.http.post(
        'http://localhost:3000/files', 
        formData
      ) as Observable<{ok: boolean}>;
  }
}
