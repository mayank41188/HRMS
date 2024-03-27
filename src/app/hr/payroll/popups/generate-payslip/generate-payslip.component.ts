import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-generate-payslip',
  templateUrl: './generate-payslip.component.html',
  styleUrls: ['./generate-payslip.component.scss']
})
export class GeneratePayslipComponent {
  generatePayslip: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private matSnackBar: MatSnackBar) {
    this.popupGeneratePayslip();
  }

  myControl = new FormControl('');
  Employeepayslip: string[] = ['RT0001', 'RT0002', 'RT0003', 'RT0004', 'RT0005', 'RT0006', 'RT0007', 'RT0008', 'RT0009', 'RT0010', 'RT0011',];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.Employeepayslip.filter(Employeepayslip => Employeepayslip.toLowerCase().includes(filterValue));
  }

  popupGeneratePayslip() {
    this.generatePayslip = this.formBuilder.group({
      employeenumber: [''],
      emailId: [''],
      fromDate: [''],
      toDate: [''],
    });
  }

  onSubmit() {
    console.log('Your form data : ', this.generatePayslip.value);
    let msg = ['An email has been generated and sent'];
    let message = msg.join('');
            this.showSuccessSnack(message); 
  }

  showSuccessSnack(message: string): void {
    this.matSnackBar.open(message, undefined, {
        duration: 5000,
        panelClass: ['green-snackbar'],
        horizontalPosition: 'center',
        verticalPosition: 'top',
    });
}
}




