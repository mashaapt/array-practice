import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

import { Profile } from '../../models/Profile';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  form: FormGroup;
  profile: Profile;
  imageDatas: string[] = [];
  // profileService: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, ),
      images: new FormControl([])
    });
  }

  onFileSelect(event: Event) {
    const fileList = (event.target as HTMLInputElement).files;
    const files = Array.from(fileList);

    this.form.patchValue({ images: files });
    
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];

    files.forEach((file, index) => {
      if (file && allowedMimeTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageDatas[index] = reader.result as string;
        }
        reader.readAsDataURL(file);
      }
    });

  }

  onSubmit() {
    this.profileService.addProfile(this.form.value.name, this.form.value.images);
    this.form.reset();
    this.imageDatas = [];
  }
}
