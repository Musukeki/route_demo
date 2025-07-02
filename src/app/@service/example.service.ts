import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  // 作法一
  // userNameService!: string;
  // userEmailService!: string;
  // userPhoneService!: number;

  // 作法二(推薦)
  userDataJson!: any; // 因為存取的資料為 JSON，因此要定義型別為 any 才能存取

  constructor() { }
}
