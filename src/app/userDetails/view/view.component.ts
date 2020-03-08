import { Component, OnInit } from '@angular/core';
import { AddressApiService } from 'src/app/address-api.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  user: any;

  constructor(private addressService: AddressApiService, private router: Router ) { }

  ngOnInit() {
    this.addressService.getUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }

  deleteUser(user: User): void {
    this.addressService.deleteUser(user.id).subscribe(data => {
      this.user = this.user.filter(u => u !== user);
   });
  }
  editUser(user: User): void {
    this.router.navigate(['edit/' + user.id]);
  }
}
