import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

  private data_url = "/assets/data.json";

  getData() {
    return this.http.get<any>(this.data_url);
  }
}
