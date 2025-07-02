import { ExampleService } from './../@service/example.service';
import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {

  constructor( private exampleService: ExampleService ) {}

  // userName!: string;

  @Input() userEmail_input!: string;

  // 宣告一個全域變數，讓他等於 output 輸出方法
  outPutEmit = output<string>();

  ngOnInit(): void {
    // let secondPageGetData = this.exampleService.firstPageData;
    // console.log(secondPageGetData);

    // this.userName = this.exampleService.userName


  }

  outputFn() {
    // 使用上面宣告的 output 的全域變數中的 emit 方法執行輸出
    // 並且需要將輸出內容寫在()中
    this.outPutEmit.emit('Allen')
  }
}
