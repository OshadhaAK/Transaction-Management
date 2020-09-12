import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StaffService } from '../services/staff.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(private staffService: StaffService) {
    this.myForm = new FormGroup({
      employeeId: new FormControl(null, Validators.required), 
      name: new FormControl(null, Validators.required), 
      phoneNo: new FormControl(null, Validators.required), 
      nicNo: new FormControl(null, Validators.required), 
      epfNo: new FormControl(null, Validators.required)
    }); 
   }

  ngOnInit() {
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value, null, 4));
    this.staffService.submitForm(this.myForm.value).subscribe(data => {

    },error => {
      alert('NOT SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value, null, 4));
    });
}
}
