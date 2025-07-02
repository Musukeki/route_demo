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

  userEmail: any;

  constructor(private router: Router,
              private exampleService: ExampleService
  ) {}

  ngOnInit() {
    if(!this.userEmail) {
      this.userEmail = 'abc@email.com'
    }
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
  checkTo(url: string) {
    this.router.navigate([url])
  }

}
