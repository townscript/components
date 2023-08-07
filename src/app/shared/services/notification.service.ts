import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {
    constructor(private snackBar: MatSnackBar) {
    }

    success = (message, duration, action): void => {
        const config = new MatSnackBarConfig();
        config.panelClass = ['ts-notification-success'];
        config.duration = duration;
        this.snackBar.open(message, action, config);
    }
}
