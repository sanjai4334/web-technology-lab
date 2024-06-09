import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  personalInfoForm: FormGroup;
  submitted = false;
  countries: string[] = ['USA', 'Canada', 'UK', 'Australia', 'India'];

  constructor(private fb: FormBuilder) {
    this.personalInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.personalInfoForm.valid) {
      console.log('Form Submitted', this.personalInfoForm.value);
    }
  }
}
