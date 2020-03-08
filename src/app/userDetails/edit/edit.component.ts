import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressApiService } from 'src/app/address-api.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: any;

  constructor(private formBuilder: FormBuilder, private addressService: AddressApiService, private router: Router,
              private routes: ActivatedRoute) { }
  
  addForm: FormGroup;
  
  ngOnInit() {
    
    const routerParams = this.routes.snapshot.params;
    console.log(routerParams.id);
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });


    this.addressService.getUserById(routerParams.id).subscribe(data => {
      this.addForm.patchValue(data);
      // console.log(this.user);
    });
  }

}
