export enum ENTITIES {
  PROPERTY = 'property',
  USER = 'user',
}

export interface Entity {
  id?: string;
}

export interface Meta {
  created_at: string;
  updated_at: string;
}
