import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profiles: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  readonly url = "https://localhost:3000/api/profiles";

  constructor(private http: HttpClient) { }

  getProfiles() {
    this.http
      .get<{ profiles: Profile[] }>(this.url)
      .pipe(
        map((profileData) => {
          return profileData.profiles;
        })
      ).subscribe((profiles) => {
        this.profiles = profiles;
        this.profiles$.next(this.profiles);
      })
  }

  getProfilesStream() {
    return this.profiles$.asObservable();
  }
}
