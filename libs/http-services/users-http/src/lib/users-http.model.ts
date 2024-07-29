export enum Gender {
  Male = 'm',
  Female = 'f',
  Unknown = 'u'
}

export enum Status {
  Pending = '2',
  Active = '1',
  Inactive = '0'
}

export interface User {
  readonly id: string;
  name: string;
  username: string;
  phoneNumber: string;
  email: string;
  age: number;
  gender: Gender;
  status: Status;
}
