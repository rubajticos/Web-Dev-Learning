import { Component, OnInit } from '@angular/core';
import { LoggingService } from './component/logging.service';
import * as fromApp from '../app/component/store/app.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from '../app/component/auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>, private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.store.dispatch(new AuthActions.AutoLogin());
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
