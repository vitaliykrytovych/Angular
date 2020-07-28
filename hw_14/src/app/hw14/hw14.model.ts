import { IContact } from './hw14.interface';

export class Contacts implements IContact {
  constructor(
    public firstName: string,
    public lastName: string,
    public phoneNum: string
  ) { }
}
