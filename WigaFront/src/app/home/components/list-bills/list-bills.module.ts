import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBillsPageRoutingModule } from './list-bills-routing.module';

import { ListBillsPage } from './list-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBillsPageRoutingModule
  ],
  declarations: [ListBillsPage]
})
export class ListBillsPageModule {}
