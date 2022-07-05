import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  template: '<youtube-player videoId="LXb3EKWsInQ"></youtube-player>',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  imageToUpload: File = null;
  videoToUpload: File = null;
  selectedImage: string = 'https://dummyimage.com/318x200/000/fff';
  selectedPdf: string = '../../../assets/pdf.png';
  selectedVideo: string = '../../../assets/video.png';
  caption = 'Choose an image';
  captionPdf = 'Choose a PDF';
  captionVideo = 'Choose a video';
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  safeSrc: SafeResourceUrl;

  constructor(
    private _formBuilder: FormBuilder,
    public sanitizer: DomSanitizer
  ) {
    
  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  // onSelectFile(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     this.imageToUpload = event.target.files[0];
  //     const reader = new FileReader();
  //     reader.readAsDataURL(this.imageToUpload);
  //     reader.onload = (e) => (this.selectedImage = reader.result.toString());
  //     this.caption = event.target.files[0].name;
  //   }
  // }

  onSelectPdfFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imageToUpload = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.imageToUpload);
      reader.onload = (e) => (this.selectedPdf = reader.result.toString());
      this.captionPdf = event.target.files[0].name;
    }
  }

  onSelectVideoFile(event: any){
    if (event.target.files && event.target.files[0]) {
      this.videoToUpload = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.videoToUpload);
      reader.onload = (e) => (this.selectedVideo = reader.result.toString());
      this.captionVideo = event.target.files[0].name;
    }
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 2097152;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      console.log(fileInput.target.files[0].size);
      if (fileInput.target.files[0].size >= max_size) {
        this.imageError = 'Maximum size allowed is ' + max_size / 1048576 + 'Mb';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs: any) => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          console.log(img_height, img_width);

          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            // return false;
          } else {
            const imgBase64Path = e.target.result;
            this.cardImageBase64 = imgBase64Path;
            this.isImageSaved = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
  }
}
