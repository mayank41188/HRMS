import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  showSuccessSnack(matSnackBar: MatSnackBar, message: string, duration: number = 5000): void {
    if (message) {
        matSnackBar.open(message, undefined, {
            duration: duration,
            panelClass: ['green-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'top',
        });
    }
}

showErrorSnack(matSnackBar: MatSnackBar, message: string, duration: number = 5000): void {
    if (!message) {
        message = 'We encountered an issue. Please try again later.';
    }

    matSnackBar.open(message, undefined, {
        duration: duration,
        panelClass: ['red-snackbar'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
    });
}
}
