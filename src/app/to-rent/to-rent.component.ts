import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddressApiService } from '../address-api.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';


@Component({
  selector: 'app-to-rent',
  templateUrl: './to-rent.component.html',
  styleUrls: ['./to-rent.component.css']
})
export class ToRentComponent implements OnInit {
  // @Input() postcode: any;
  postcode: string;
  message: string;
  address: any[];
  dataAdd: any;
  selectedAddress: any;
  splitAddress: any;
  // @Output() postcodeEvent = new EventEmitter<string>();
  constructor( private addressApiService: AddressApiService) {
  }

  ngOnInit() {
    this.addressApiService.currentMessage.subscribe(message => this.message = message);
  }

  selectedValues(filterVal: any) {
    //filterVal = this.dataAdd;
    //console.log(filterVal);
    
    this.selectedAddress = filterVal.target.value;
    //this.splitAddress = filterVal.target.value.addresses[0].formatted_address[0].line_1;
    this.splitAddress = this.selectedAddress.split(',');
    console.log(this.splitAddress);
    console.log(this.splitAddress[0]);

  }

  sendPostcode() {
    console.log(this.postcode);
    this.addressApiService.message = this.postcode;
    this.addressApiService.changeMessage(this.postcode);
    // this.addressApiService.getAddress().subscribe((data) => {
    //    this.dataAdd = data;
    //     console.log(this.dataAdd);
    //    this.address = this.dataAdd.addresses;
    //    console.log(data);
    //    this.selectedValues(this.dataAdd);
    //  });

   // this.postcodeEvent.emit(this.postcode);

    }
  }

