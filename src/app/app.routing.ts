import { LogComponent } from './back/log.component';
import { ProfileComponent } from './back/profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';

import { Routes, RouterModule } from '@angular/router';

const ROUTE_BACK: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'log', component: LogComponent }
];

const APP_ROUTES: Routes = [
    { path: '', component: FrontComponent },
    { path: 'back/:usNm', component: BackComponent, children: ROUTE_BACK },
    { path: 'back', redirectTo: 'back/codekul', pathMatch: 'full' },
    { path: 'forgot/:usNm', component: ForgetPasswordComponent },
    { path: '**', component: ForgetPasswordComponent }
];

export const MyRouterModule = RouterModule.forRoot(APP_ROUTES);