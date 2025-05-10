import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {Course, CoursesApiService} from '../../services/courses-api.service';
import {Observable} from 'rxjs';

import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-courses',
  imports: [AsyncPipe, MatCardModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {

  courses$!: Observable<Course[]>;
  private coursesApiService = inject(CoursesApiService);
  constructor() {
    this.courses$ = this.coursesApiService.getCourses();
  }

}

