export class Address{ 
  city?: string;
  street?: string;
  houseNumber?: string;
  postalCode?: string;
  constructor(){
  }
}

export interface Contract {
  number: string;
  name: string;
  type: ContractType;
  packages?: Array<Package>;
}

export interface Package {
  type: PackageType;
  name: string;
  quantity: number;
  utilization: number;
}

export enum ContractType{
  Basic, Premium
  }

  export enum PackageType{
    SMS=0, Calls=1, Browsing=2, CallsAbroad=3, BrowsingVolume=4
    }
export class Customer {
    id: string;
    firstName: string;
    lastName: string;
    address?:Address;
    contracts?: Array<Contract>;

    constructor(id: string, firstName: string, lastName: string){
      this.id = id;
      this.firstName = firstName;
      this.lastName= lastName;
    }
  }