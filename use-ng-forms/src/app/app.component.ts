import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
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
    isManager: true,
    signature: 'blablablablbalbalba'
  };
  constructor(private formBuilder: FormBuilder) {

  }

  maxAge = 20;

  customValidation(maxValue: number) {
    return (control: AbstractControl) => {
      const value = +control.value;
      if (value > maxValue) {
        return { ShimonError: { currentValue: control.value } };
      }
      return null;
    };
  }

  customValidation2(control: AbstractControl) {
    // control.parent -> formGroup.
    const value = +control.value;
    if (value > this.maxAge) {
      return { ShimonError: { currentValue: control.value } };
    }
    return null;

  }

  customGroupValidation(form: FormGroup) {
    const person: Person = form.value;
    if (person.firstName.startsWith('a') && person.lastName.startsWith('b')) {
      return { fullNameError: { moreData: { message: 'fullName start with a and last name with b' } } };
    }
    return null;
  }

  ngOnInit(): void {

    this.personForm = this.formBuilder.group(
      {
        firstName: [this.personToEdit.firstName, [Validators.required]],
        lastName: [this.personToEdit.lastName, [Validators.required]],
        age: [this.personToEdit.age, [Validators.required, Validators.min(0), this.customValidation(20),
        (control) => this.customValidation2(control)]],
        email: [this.personToEdit.email, [Validators.required, Validators.email]],
        isManager: [this.personToEdit.isManager],
        signature: [this.personToEdit.signature]
      }, { updateOn: 'change', validators: [this.customGroupValidation] }
    );

    this.personForm.valueChanges.pipe(
      debounceTime(2000),
      filter(x => this.personForm.valid))
      .subscribe(x => {
        console.log('save to server', this.personForm.value);
      });
  }

  displayError(form: FormGroup) {

    for (const controlName in form.controls) {
      if (form.controls[controlName].invalid) {
        console.group(controlName);
        console.log('control ' + controlName);
        console.log('Errors', form.controls[controlName].errors);
        console.groupEnd();
      }
    }
    if (form.invalid) {
      console.log('Form invalid', form.errors);
    }
  }

  onSave() {
    if (this.personForm.valid) {
      this.personToEdit = this.personForm.value;
    } else {
      this.displayError(this.personForm);
    }

  }
}
