import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { SecondComponent } from "./second/second.component";
import { FormsModule } from '@angular/forms';
import { ExampleService } from './@service/example.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SecondComponent,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'route_demo';
arr = [10,20,3,5,8,9,23,657,123,67];
// arr<number>: []

  // userEmail: any;

  // userArray = [
  //   {
  //     userName: '玩家A',
  //     lev: 10,
  //     props: [
  //       {
  //         propsName: '蘑菇',
  //         amount: 5
  //       },
  //       {
  //         propsName: '砲彈',
  //         amount: 15
  //       }
  //     ]
  //   },
  //   {
  //     userName: '玩家B',
  //     lev: 15,
  //     props: [
  //       {
  //         propsName: '龜殼',
  //         amount: 1
  //       },
  //       {
  //         propsName: '砲彈',
  //         amount: 15
  //       }
  //     ]
  //   }
  // ]

  constructor(private router: Router,
              private exampleService: ExampleService
  ) {}

  ngOnInit() {

    // if(!this.userEmail) {
    //   this.userEmail = 'abc@email.com'
    // }

    // let arr = [10,20,3,5,8,9,23,657,123,67]
    // let i = 0;
    // for(let arrData of arr) {
    //   if(arrData == 9) {
    //     console.log(i)
    //   }
    //   i ++
    // }

    // for(let i=0; i < arr.length; i++) {
    //   if(arr[i] == 9) {
    //     console.log(arr[i])
    //   }
    // }

    let arrData = [
      {
        name: 'Allen',
        props: [
          { prop: '蘑菇' }
        ]
      },
      {
        name: 'eric',
        props: [
          { prop: '砲彈' }
        ]
      }
    ]

    // for(let item of arrData) {
    //   console.log(item.props[0].prop)
    // }

    // for(let item of arrData) {
    //   // console.log(item.props[0].prop)
    //   for(let prop of item.props) {
    //     console.log(prop.prop)
    //   }
    // }



    // for(let i = 0; i < arrData.length; i++) {
    //   console.log()
    // }

  }

  // 作法 1
  // checkOutToApp() {
  //   this.router.navigate(['/'])
  // }
  // checkOutToFirst() {
  //   this.router.navigate(['/first'])
  // }
  // checkOutToSecond() {
  //   this.router.navigate(['/second'])
  // }

  // 作法 2
  // checkTo(url: string) {
  //   this.router.navigate([url])
  // }

  // checkToJob(url: string) {
  //   this.router.navigate([url]);
  // }



}
