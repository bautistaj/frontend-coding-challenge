import { Component, OnInit } from '@angular/core';
import { Column } from '../interfaces/Column';
import { LabourCostService } from '../services/labour-cost.service';

@Component({
  selector: 'app-labour-cost-report',
  templateUrl: './labour-cost-report.component.html',
  styleUrls: ['./labour-cost-report.component.css']
})
export class LabourCostReportComponent implements OnInit {
  public orderLstAsc = false;
  public totalWorker = 0;
  public directContractors: any = [];
  public providers: any = [];
  public total: any = [];
  public data: any = [];

  public columns: { [key: string]: any } = {
    complianceStats: false,
    grossPayTotal: false,
    labourCostTotal: false,
    name: false,
    payrollAdminTotal: false,
    workForce: false,
    workerCount: false
  };
  
  constructor(private labourCostService: LabourCostService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(){
    this.labourCostService.getLabourCostReport()
    .subscribe((data) => {
      this.data = data;
      console.log(this.data);
      
      /**
       * Get the totals of workers
       */
      this.totalWorker = this.data[0]['total'][0]['workerCount'];
      
      this.total = this.data[0]['total'].map( (total: any) => this.calculateValues(total));
      this.providers = this.data[0]['providers'].map( (provider: any) => this.calculateValues(provider));
      this.directContractors = this.data[0]['directContractors'].map((contractor: any) => this.calculateValues(contractor));

      /**
       * Set default order
       */
      this.providers = this.orderDesc(this.providers, 'name');
    });
  }

  /**
   * Calculate percent
   * @param total 
   * @param calculate 
   * @returns 
   */
  private getPercent(total: number, calculate: number): number {
    return (calculate * 100 ) / total;
  }

  /**
   * Calculate pay total and percent
   * @param object 
   * @returns 
   */
  private calculateValues(object: any){
    object.grossPayTotal = object.grossPayTotal / 100;
    object.workForce = this.getPercent(this.totalWorker, object.workerCount);
    console.log(object.complianceStats === null ? 0 : object.complianceStats.Total);
    
    object.complianceStats = object.complianceStats === null ? 0 : object.complianceStats.Total;
    return  object;
  }

  /**
   * Order list tDesc
   * @param lst 
   */
  public orderDesc(lst: any[], columnName: string){

    return lst.sort(function (a:any , b:any) {
      if (a[columnName] <= b[columnName]) {
        return 1;
      }
      if (a[columnName] >= b[columnName]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

    /**
   * Order list Asc
   * @param lst 
   */
     public orderAsc(lst: any[], columnName: string){
      this.activeColumn(columnName);
      return lst.sort(function (a:any , b:any) {
        if (a[columnName] >= b[columnName]) {
          return 1;
        }
        if (a[columnName] <= b[columnName]) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    }

  /**
   * Order lst asc or desc
   */
  public order(columnName: string){
    this.activeColumn(columnName);
    this.activeColumn(columnName);
    if(this.orderLstAsc){
      this.orderLstAsc = false;
      this.orderAsc(this.providers, columnName);
    }else{
      this.orderLstAsc = true;
      this.orderDesc(this.providers, columnName);
    }
  }

  /**
   * Active column according ordedered
   * @param columnName 
   */
  public activeColumn(columnName: string){
    /**
     * Reset values
     */
    for (const key in this.columns) {
      this.columns[key] = false;
    }

    this.columns[columnName] = true;
  }
}
