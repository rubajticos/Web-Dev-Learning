import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { rejects } from 'assert';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['stable', 'critical', 'finished'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(null, Validators.required, this.projectNameValidator),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('stable'),
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  projectNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, rejects) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ invalidProjectName: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
