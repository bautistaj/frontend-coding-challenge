import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabourCostService {
  private api = environment.labourCostApi;

  constructor(private http: HttpClient) { }

  public getLabourCostReport(){
    return this.http.get(`${this.api}/labourstats`);
  }
}
