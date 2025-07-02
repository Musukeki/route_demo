// import { routes } from './../../../node_modules/@angular/router/router_module.d-Bx9ArA6K.d';
import { ExampleService } from './../@service/example.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-first',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  constructor(
    private exampleService: ExampleService,
    private router: Router
  ) {}

  userName!: string;

  goSecond() {
    this.exampleService.firstPageData = 'first 頁面要存放到 service 的資料內容';
    this.router.navigateByUrl('/second')

    this.exampleService.userName = this.userName;
  }
}
