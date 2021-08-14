import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabourCostReportComponent } from './labour-cost-report/labour-cost-report.component';

const routes: Routes = [
  {
    path: 'labourCostReport',
    component: LabourCostReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
