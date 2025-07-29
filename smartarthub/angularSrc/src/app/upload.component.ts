import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent {
  selectedFile: File | null = null;
  feedback: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadArtwork() {
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
      this.http.post('/api/artworks/upload', formData)
        .subscribe(() => this.getFeedback());
    }
  }

  getFeedback() {
    this.http.post('/api/feedback/analyze', {
      imageUrl: 'https://sample-s3-url.com/art.jpg',
      title: 'Test Artwork'
    }).subscribe((res: any) => {
      this.feedback = res;
    });
  }
}