import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../models/course';
import { Observable, catchError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['_id','name','category'];



  constructor(private courseService: CoursesService,
    public dialog: MatDialog) {
   // this.courses = []

   this.courses$ = this.courseService.findAll()
   .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos')
        return ([])
      })
   );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}



