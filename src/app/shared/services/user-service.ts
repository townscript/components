import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class UserService {

    private user$: BehaviorSubject<Object> = new BehaviorSubject<Object>({});
    user = this.user$.asObservable();
    constructor() {
    }

    updateUser(data): void {
        this.user$.next(data);
    }
}
