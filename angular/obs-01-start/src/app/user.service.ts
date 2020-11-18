import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
    activatedEmitter = new EventEmitter<boolean>();
}
