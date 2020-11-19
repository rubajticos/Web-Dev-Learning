import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    @ViewChild('f', { static: true }) signupForm: NgForm;
    defaultQuestion = 'pet';
    answer = '';
    genders = ['male', 'female'];

    suggestUserName() {
        const suggestedName = 'Superuser';
        //First approach
        // this.signupForm.setValue({
        //     userData: {
        //         username: suggestedName,
        //         email: '',
        //     },
        //     secret: 'pet',
        //     questionAnswer: '',
        //     gender: 'male',
        // });

        // Second approach
        this.signupForm.form.patchValue({
            userData: {
                username: suggestedName,
            },
        });
    }

    // onSubmit(form: NgForm) {
    //     console.log(form);
    // }

    onSubmit() {
        console.log(this.signupForm);
    }
}
