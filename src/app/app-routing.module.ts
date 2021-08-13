import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full'
  },
  {
    path: 'splashscreen',
    component: SplashscreenComponent
  },
  {
    path: 'home',
    component: SidemenuComponent,
    data: { animationState: 'end' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
