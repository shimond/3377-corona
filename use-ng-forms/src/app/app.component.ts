import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';
import { Person } from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  personForm: FormGroup;
  personToEdit: Person = {
    firstName: 'David',
    lastName: 'Cohen',
    age: 90,
    email: 'david@gmail.com',
    isManager: true
  };
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.personForm = this.formBuilder.group(
      {
        firstName: [this.personToEdit.firstName, [Validators.required]],
        lastName: [this.personToEdit.lastName, [Validators.required]],
        age: [this.personToEdit.age, [Validators.required, Validators.min(0)]],
        email: [this.personToEdit.email, [Validators.required, Validators.email]],
        isManager: [this.personToEdit.isManager]
      }
    );

    this.personForm.valueChanges.pipe(
      debounceTime(2000),
      filter(x => this.personForm.valid))
      .subscribe(x => {
        console.log('save to server', this.personForm.value);
      });
  }

  onSave() {
    if (this.personForm.valid) {
      this.personToEdit = this.personForm.value;
    }
  }
}
