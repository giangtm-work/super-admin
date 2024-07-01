export interface User {
  readonly id: string;
  email: string;
  name: string;
  phoneNumber: string;
  status: 'active' | 'inactive';
}
