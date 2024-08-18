export type Property = {
  id?: string;
  type: 'apartment' | 'villa' | 'studio';
  floor_no: number;
  room_no?: number;
};
