import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-id-form',
  templateUrl: './customer-id-form.component.html',
  styleUrls: ['./customer-id-form.component.css']
})
export class CustomerIDFormComponent implements OnInit {
  constructor(private customerService: CustomerService,private router: Router, private _snackBar: MatSnackBar) { 
  }

  customerIDForm = new FormGroup({
    customerID : new FormControl('',[Validators.pattern("^[0-9]{9}$"),Validators.required])
  });

  ngOnInit(): void {
  }
  
  onSubmit() {
    let customerID:string = this.customerIDForm.value["customerID"]?.toString()!;
    this.customerService.loginCustomer(customerID).subscribe((token: string) => {
      console.log(token); 
      if(token != null){
        localStorage.setItem("pToken", token);
        this.router.navigate(['/customer-details']);
      }
    },
    err => {  this._snackBar.open("id didn't exist, please try again", "Close")});
  }
}
