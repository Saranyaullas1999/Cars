import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httP:HttpClient) { }

  viewCars=()=>{
    return this.httP.get("http://localhost:8080/viewcar")
  }

  addCars=(data:any)=>{
    return this.httP.post("http://localhost:8080/addcar",data)
  }
}
