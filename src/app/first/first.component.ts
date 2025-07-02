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
secondPageGetData!: string;

  constructor(
    private exampleService: ExampleService,
    private router: Router
  ) {

  }

  goSecond() {
    this.exampleService.firstPageData = this.secondPageGetData;
    this.router.navigateByUrl('/second')
  }
}
