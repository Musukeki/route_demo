import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'route_demo';

  constructor(private router: Router) {}

  checkToFirst() {
    this.router.navigateByUrl('/first')
  }

  ngOnInit() {

  }

  // 作法 1
  checkOutToApp() {
    this.router.navigate(['/'])
  }
  checkOutToFirst() {
    this.router.navigate(['/first'])
  }
  checkOutToSecond() {
    this.router.navigate(['/second'])
  }

  // 作法 2
  // checkTo(url: string) {
  //   this.router.navigate([url])
  // }
}
