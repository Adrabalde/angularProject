import {Student} from './student';

export interface Ticket {
  id?: number;
  title?: string;
  description?: string;
  date?: Date;
  studentId?: number;
  student: Student;
  major?: string;
  archived?: boolean;
}

export enum Major {
  SI = 'SI',
  GB = 'GB'
}
