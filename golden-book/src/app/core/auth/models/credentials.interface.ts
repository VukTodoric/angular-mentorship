import { Role } from './role.enum';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegistrationCredentials extends LoginCredentials {
  firstName: string;
  lastName: string;
  countryId: number;
  confirmPassword?: string;
  role: Role;
  createdAt: string;
}
