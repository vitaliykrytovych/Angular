import { ITasks } from './variant2.interface';

export class Tasks implements ITasks {
  constructor(
    public idUs: number,
    public task: string,
    public taskStatus = false
  ) { }
}
