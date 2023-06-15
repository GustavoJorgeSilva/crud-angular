import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent {

    form: FormGroup;

    constructor(private formBuilder: FormBuilder,
      private service: CoursesService,
      private snackBar: MatSnackBar){

      this.form =  this.formBuilder.group({

        name: [null],
        category: [null],

      });

    }

    onSubmit(){
      this.service.save(this.form.value)
      .subscribe(data => console.log(data), error => this.onError());
    }

    onCancel(){
      console.log('onCancel');
    }

    private onError(){
      this.snackBar.open('Erro ao salvar curso.', '', {duration:3000});
    }

}
