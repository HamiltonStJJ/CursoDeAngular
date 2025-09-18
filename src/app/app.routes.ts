import { Routes } from '@angular/router';
import { Login } from './auth/components/login/login';
import { ListClients } from './clients/components/list-clients/list-clients';
import { ListInvoices } from './invoices/components/list-invoices/list-invoices';
import { ListPost } from './posts/components/list-post/list-post';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'clients', component: ListClients },
  { path: 'posts', component: ListPost },
  { path: 'invoices', component: ListInvoices },
  { path: '**', redirectTo: '' }
];
