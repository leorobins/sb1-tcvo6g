export type SpaceType = 'single-pod' | 'group-zone' | 'quiet-study';

export interface Booking {
  id: string;
  userId: string;
  spaceType: SpaceType;
  startTime: Date;
  endTime: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  universityId: string;
}