
export interface Address {
    addr1: string;
    addr2: string;
    city: string;
    state: string;
    country: string;
    zip: number;
  }
  
  export interface User extends Document {
    [x: string]: any;
    username: string;
    readonly password: string;
    seller: boolean;
    address: Address;
    created: Date;
  }