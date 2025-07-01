import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';

export const routes: Routes = [
  { path: 'first', component: FirstComponent,
    children: [
      { path: 'child-a', component: ChildAComponent }
    ]
  },
  { path: 'second', component: SecondComponent }
];
