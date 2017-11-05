import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavingCostPage } from './saving-cost';

@NgModule({
  declarations: [
    SavingCostPage,
  ],
  imports: [
    IonicPageModule.forChild(SavingCostPage),
  ],
})
export class SavingCostPageModule {}
