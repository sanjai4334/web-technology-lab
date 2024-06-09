import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-personal-info",
    templateUrl: "./personal-info.component.html",
    styleUrls: ["./personal-info.component.css"]
})
export class PersonalInfoComponent {
    personalInfoForm: FormGroup;
    submitted = false;
    countries: string[] = [
        "USA",
        "Canada",
        "Mexico",
        "Brazil",
        "Argentina",
        "UK",
        "Germany",
        "France",
        "Italy",
        "Spain",
        "China",
        "Japan",
        "South Korea",
        "India",
        "Australia"
    ];

    constructor(private fb: FormBuilder) {
        this.personalInfoForm = this.fb.group({
            firstName: [
                "",
                [Validators.required, Validators.pattern(/^[A-z]+$/)]
            ],
            lastName: [
                "",
                [Validators.required, Validators.pattern(/^[A-z]+$/)]
            ],
            dob: ["", Validators.required],
            phoneNumber: [
                "",
                [Validators.required, Validators.pattern(/^\d{10}$/)]
            ],
            email: ["", [Validators.required, Validators.email]],
            country: ["", Validators.required]
        });
    }

    onSubmit(): void {
        this.submitted = true;
        if (this.personalInfoForm.valid) {
            console.log("Form Submitted", this.personalInfoForm.value);
        }
    }
}
