import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  userNameService!: string;
  userEmailService!: string;
  userPhoneService!: number;

  constructor() { }
}
