import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

    constructor() {
    }

    IsJsonString = (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
}