import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  imageToUpload: File = null;
  selectedImage: string = 'https://dummyimage.com/318x200/000/fff';
  selectedPdf: string = 'https://dummyimage.com/318x200/000/fff';

  caption = 'Choose an image';
  
  captionPdf = 'Choose a PDF';


  constructor(private _formBuilder: FormBuilder, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }

 onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      this.imageToUpload = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.imageToUpload);
      reader.onload = e => this.selectedImage = reader.result.toString();
      this.caption = event.target.files[0].name;
    }
  }

onSelectPdfFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      this.imageToUpload = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.imageToUpload);
      reader.onload = e => this.selectedPdf = reader.result.toString();
      this.captionPdf = event.target.files[0].name;
    }
  }

}