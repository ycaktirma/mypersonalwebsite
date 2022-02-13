import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/homepage',
    pathMatch:'full'
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'**',
    redirectTo:'/homepage',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
