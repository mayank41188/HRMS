import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-new-candidate-popup',
  templateUrl: './add-new-candidate-popup.component.html',
  styleUrls: ['./add-new-candidate-popup.component.scss']
})
export class AddNewCandidatePopupComponent {
  addCandidate: FormGroup;
  jobId: any = [['125631563'], ['125631564'], ['125631565'], ['125631566'], ['125631567'], ['125631568'],]
  constructor(private formBuilder: FormBuilder) {
    this.addCandiatepop();
  }

  addCandiatepop(){
    this.addCandidate = this.formBuilder.group({

    });

  }

  onSubmit() {
    console.log('Your form data : ', this.addCandidate.value);
  }
}
