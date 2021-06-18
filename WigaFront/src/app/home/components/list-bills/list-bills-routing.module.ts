import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBillsPage } from './list-bills.page';

const routes: Routes = [
  {
    path: '',
    component: ListBillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBillsPageRoutingModule {}
