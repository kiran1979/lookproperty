import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  userProfileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('', Validators.required),
    age: new FormControl(''),
    email: new FormControl(''),
        addressGroup: new FormGroup({
          address1: new FormControl('', Validators.required),
          address2: new FormControl(''),
          state: new FormControl(''),
          zip: new FormControl(''),
        })
  });

  ngOnInit() {
  }

  onSubmit() {
    // console.warn(this.userProfileForm.value);

    // console.log(this.userProfileForm.controls['firstName'].value);

    // console.log(this.userProfileForm.get('firstName').value);

    console.log(this.userProfileForm.get(['addressGroup', 'address1']).value);
  }
}
