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
  members: any;
  employeeId: any;
  ischecked: any;

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
    this.staffService.getAll().subscribe((data) => {
      console.log(data)
      this.members = data;
    })
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value, null, 4));
    this.staffService.submitForm(this.myForm.value).subscribe(data => {
      location.reload();
    }, error => {
      alert('NOT SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value, null, 4));
    });
  }

  onChange(id: string, isChecked: boolean) {
    this.ischecked = isChecked
    this.employeeId = id;
    console.log(this.employeeId)
  }

  updateEmployee() {
    console.log(this.employeeId)
    this.staffService.getById(this.employeeId).subscribe((data) => {
      console.log(data);
      this.myForm.get('employeeId').setValue(data['employeeId'])
      this.myForm.get('name').setValue(data['name'])
      this.myForm.get('phoneNo').setValue(data['phoneNo'])
      this.myForm.get('nicNo').setValue(data['nicNo'])
      this.myForm.get('epfNo').setValue(data['epfNo'])
    });

  }

  deleteEmployee() {
    console.log(this.employeeId)
    this.staffService.delete(this.employeeId).subscribe((data) => {
      location.reload();
    });
  }

  update(){
    console.log(this.employeeId)
    this.staffService.updateUser(this.employeeId,this.myForm.value).subscribe((data) => {
      console.log(data);
      location.reload();
    });
  }
}
