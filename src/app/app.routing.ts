import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: FrontComponent },
    { path: 'back/:usNm', component: BackComponent },
    { path: 'forgot/:usNm', component: ForgetPasswordComponent }
];

export const MyRouterModule = RouterModule.forRoot(APP_ROUTES);