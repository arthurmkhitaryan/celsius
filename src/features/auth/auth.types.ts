export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  city: string;
  postcode: string;
  streetAddress: string;
  houseFlatNumber: string;
}

export interface Login {
  email: string;
  password: string;
}
