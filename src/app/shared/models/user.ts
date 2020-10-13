export interface User {
  userName: string;
  email: string;
  address: Address;
}

interface Address {
  street: string;
  postalCode: string;
  uf: string;
  city: string;
  neighborhood: string;
  number: string;
}
