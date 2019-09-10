import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlaceService {

    private currentPlace$: BehaviorSubject<Object> = new BehaviorSubject<Object>(null);
    documentIsAccessible: boolean;
    place = this.currentPlace$.asObservable();

    constructor() {

    }

    updatePlace(data): void {
        this.currentPlace$.next(data);
    }
}
