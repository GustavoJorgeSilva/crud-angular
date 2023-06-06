import { Course } from './../models/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end' },
      { _id: '2', name: 'SpringBoot', category: 'back-end' }
    ];
  }

}

