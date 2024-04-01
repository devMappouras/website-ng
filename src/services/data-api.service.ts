import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile(): Promise<any> {
    return this.http.get('assets/profile.json').toPromise();
  }

  getTopSkills(): Promise<any> {
    return this.http.get('assets/top-skills.json').toPromise();
  }

  getFeaturedProjects(): Promise<any> {
    return this.http.get('assets/projects.json').toPromise();
  }

  getCertificates(): Promise<any> {
    return this.http.get('assets/certificates.json').toPromise();
  }

  getWorkHistory(): Promise<any> {
    return this.http.get('assets/work-experience.json').toPromise();
  }
}
