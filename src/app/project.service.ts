import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private headers: HttpHeaders;
  private baseUrl: string = 'https://apppropla-api.azurewebsites.net/api/projects/';
  private _baseUrl: string = 'https://apppropla-api.azurewebsites.net/api/values/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  public get() {
    return this.http.get(this.baseUrl);
  }
}
