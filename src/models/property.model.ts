import { Entity, Meta } from './entities.model';

export interface Property extends Entity, Meta {
  type: 'apartment' | 'villa' | 'studio';
  floor_no: number;
  room_no?: number;
}
