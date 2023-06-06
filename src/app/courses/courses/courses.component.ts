import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../models/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [];
  displayedColumns = ['name','category'];



  constructor(private courseService: CoursesService) {
   // this.courses = []

   this.courses = this.courseService.findAll();

  }


}
