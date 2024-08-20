import { Entity, Meta } from './entities.model';

export enum UserRole {
  TENANT = 'tenant',
  LANDLORD = 'landlord',
  PR_MANAGER = 'pr_manager',
}

export interface User extends Entity, Meta {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  role: UserRole;
}
