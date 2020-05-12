import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  @Output() saveRequested = new EventEmitter<Movie>();
  @Input() set movie(m: Movie) {
    this.createForm(m);
  }
  @Input() OkButtonText = 'OK';

  movieEditForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  MyCustomValidationFn(control: AbstractControl) {

    // control.dirty
    // control.touched
    // control.enabled

    const value = control.value;
    if (value % 2 === 1) {
      return { MyCustomValidationRuleName: { message: 'Only event', currentValue: value } };
    }
    return null;
  }

  createForm(m: Movie) {
    this.movieEditForm = this.formBuilder.group(
      {
        name: [m.name, [Validators.required]],
        length: [m.length, [Validators.required, Validators.min(0), this.MyCustomValidationFn]],
        description: [m.description],
        imageUrl: [m.imageUrl, [Validators.required]],
        id: [m.id]
      }
    );
  }

  onSubmit() {
    this.saveRequested.emit(this.movieEditForm.value);
  }

}
