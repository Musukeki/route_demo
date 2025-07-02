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

  getFirstUserName!: string;
  getFirstUserEmail!: string;
  getFirstUserPhone!: number;


  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.getFirstUserName = this.exampleService.userNameService;
    this.getFirstUserEmail = this.exampleService.userEmailService;
    this.getFirstUserPhone = this.exampleService.userPhoneService;
  }

}
