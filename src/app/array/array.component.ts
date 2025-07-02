import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  imports: [],
  templateUrl: './array.component.html',
  styleUrl: './array.component.scss'
})
export class ArrayComponent {
  // 畫面要使用的東西，都必須要是 全域變數
  arrData: Array<number> = [10, 20, 3, 5, 8, 9, 23, 657, 123, 67];

  arr2: Array<any> = [
    {
      name: 'Allen',
      props: [
        {
          propName: '蘑菇',
          amount: 3
        }
      ]
    },
    {
      name: 'Eric',
      props: [
        {
          propName: '砲彈',
          amount: 1
        }
      ]
    }
  ]

  ngOnInit(): void {
    // 印出 9 的索引值
    // 作法一
    let arr = this.arrData;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] == 9) {
        console.log(i)
      }
    }
    // 做法二
    let index = 0;
    for(let data of arr) {
      if(data == 9) {
        console.log(index)
      }
      index++
    }


    // Angular html 中的 @for 操作

    // 將以下迴圈在 HTML 中呈現
    for(let item1 of this.arr2) {
      console.log(item1.props)
      for(let item2 of item1.props) {
        console.log(item2.propName)
      }
    }
  }
}
