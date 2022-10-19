import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  year=""
  color=""
  price=""

  readValue=()=>{
    let data={
      "name":this.name,
      "year":this.year,
      "color":this.color,
      "price":this.price
    }
    console.log(data)
    alert("Successfully Added")
    this.myapi.addCars(data).subscribe(
      (res)=>{
        console.log(res)
      }
    )
    this.name=""
    this.year=""
    this.color=""
    this.price=""
  }

  ngOnInit(): void {
  }

}
