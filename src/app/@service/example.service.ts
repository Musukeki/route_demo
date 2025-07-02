// 下面這段程式是告訴系統這個 ts 是大家共用的
// ---開始---
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// ---結束---

// export class 後面接的是這支檔案的名稱
export class ExampleService {

  // firstPageData!: string;
  // userName: any;

  userNameService!: string;
  userEmailService!: string;
  phoneNumberService!: number;


  constructor() { }
}
