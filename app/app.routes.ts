import { provideRouter, RouterConfig }  from '@angular/router';
import { MembersComponent } from './member/members.component';

const routes: RouterConfig = [
  {
    path: "members",
    component: MembersComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];