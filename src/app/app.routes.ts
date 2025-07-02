import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { ArrayComponent } from './array/array.component';

export const routes: Routes = [
  { path: 'first', component: FirstComponent,
    children: [
      { path: 'child-a', component: ChildAComponent }
    ]
  },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'fourth', component: FourthComponent },
  { path: 'array', component: ArrayComponent }
];
