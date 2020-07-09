import { ITasks } from './hw11angular.interface';

export class Tasks implements ITasks {
  constructor(
    public idUs: number,
    public task: string,
    public taskStatus = false
  ) { }
}
