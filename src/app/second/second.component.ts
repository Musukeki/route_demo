import { ExampleService } from './../@service/example.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

  constructor( private exampleService: ExampleService ) {}

  ngOnInit(): void {
    let secondPageGetData = this.exampleService.firstPageData;
    console.log(secondPageGetData);
  }
}
