import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { ExampleService } from '../@service/example.service';

@Component({
  selector: 'app-first',
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  // ngModel 是雙向綁定，因此使用者輸入什麼內容，下方變數的值就會是對應的內容
  userName!: string;
  userEmail!: string;
  userPhone!: number;

  constructor(private exampleService: ExampleService,
              private router: Router
  ) {}

  switchView() {
    // 作法一
    // this.exampleService.userNameService = this.userName;
    // this.exampleService.userEmailService = this.userEmail;
    // this.exampleService.userPhoneService = this.userPhone;
    // this.router.navigateByUrl('/second');

    // 作法二
    this.exampleService.userDataJson = {
      userNameInJson: this.userName,
      userEmailInJson: this.userEmail,
      userPhoneInJson: this.userPhone
    }
    this.router.navigateByUrl('/second');
  }

}
