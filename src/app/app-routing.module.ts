import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth/components/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './user/user-layout/user-layout/user-layout.component';

const routes: Routes = [ { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    ]
  },
  {
    path: 'u',
    component: UserLayoutComponent,
      // canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['Admin', 'Standard'] },
    children: [
      { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
    ]
  },
  { path: '**', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
