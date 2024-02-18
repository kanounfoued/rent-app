export type User = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  role: UserRole;
};

export enum UserRole {
  TENANT = 'tenant',
  LANDLORD = 'landlord',
  PR_MANAGER = 'pr_manager',
}
