import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';


export interface Course {
  id: string;
  name: number;
  description: number;
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesApiService {
  private http = inject(HttpClient);

  private baseUrl = environment.restApiBaseUrl;
  private coursesEndpointPath = environment.coursesEndpointPath;

  constructor() { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}${this.coursesEndpointPath}`);
  }

}

