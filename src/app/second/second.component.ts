import { parse } from './../../../node_modules/@angular/build/node_modules/vite/node_modules/postcss/lib/postcss.d';
import { ExampleService } from './../@service/example.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

  // 作法一
  // getFirstUserName!: string;
  // getFirstUserEmail!: string;
  // getFirstUserPhone!: number;

  // 作法二
  getUserDataJson!: any;


  constructor(private exampleService: ExampleService) {}

  // 頁面載入時就渲染資料
  ngOnInit(): void {
    // 作法一
    // this.getFirstUserName = this.exampleService.userNameService;
    // this.getFirstUserEmail = this.exampleService.userEmailService;
    // this.getFirstUserPhone = this.exampleService.userPhoneService;

    // 作法二
    this.getUserDataJson = this.exampleService.userDataJson;
  }

}
