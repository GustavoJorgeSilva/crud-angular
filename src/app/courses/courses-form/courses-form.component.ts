import { Location } from '@angular/common';
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
      private snackBar: MatSnackBar,
      private location: Location){

      this.form =  this.formBuilder.group({

        name: [null],
        category: [null],

      });

    }

    onSubmit(){
      this.service.save(this.form.value)
      .subscribe(data => this.onSucces(), error => this.onError());
    }

    onCancel(){
      this.location.back();
    }

    private onError(){
      this.snackBar.open('Erro ao salvar curso.', '', {duration:3000});
    }

    private onSucces(){
      this.snackBar.open('Curso salvo com sucesso!', '', {duration:3000});
      this.onCancel();
    }

}
