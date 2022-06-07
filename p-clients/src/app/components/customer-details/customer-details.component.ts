import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer'
import { CustomerService } from '../../services/customer.service';
import {ContractType, PackageType, Address} from '../../model/customer';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer | undefined;
  isEditEnable : boolean = false;
  address: Address = new Address();

  displayedColumns: string[] = ['name','quantity','utilization', 'type']
  constructor(private customerService: CustomerService,private router: Router) {
    if(localStorage.getItem("pToken") == null)
    {
      this.router.navigate(['/login']);
    }
    else{
    this.customerService.getCustomer(localStorage.getItem("pToken")?.toString()!).subscribe((customer: Customer) => {
      console.log(customer); 
      this.customer = customer;
      if(customer.address != undefined)
      {
        this.address = customer.address;
      }
    },
    err => {  localStorage.removeItem("pToken");
    this.router.navigate(['/login']);}
    );
  }
   }

  ngOnInit(): void {
    
  }
  onEdit(){
    this.isEditEnable =!this.isEditEnable;
}
  GetContractTypeKey(index:number):string{
    return ContractType[index];
  }
  GetPackageTypeKey(index:number):string{
    return PackageType[index];
  }
  changeCustomer():void{
    localStorage.removeItem("pToken");
    this.router.navigate(['/login']);
  }
}
