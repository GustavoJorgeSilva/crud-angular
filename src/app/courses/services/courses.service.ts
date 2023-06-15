import { Course } from './../models/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      take(1),
      tap(courses => console.log)
    );
  }

  save(record: Course){
    return this.httpClient.post<Course>(this.API, record).pipe(first());

  }

}

