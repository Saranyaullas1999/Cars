import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcar',
  templateUrl: './viewcar.component.html',
  styleUrls: ['./viewcar.component.css']
})
export class ViewcarComponent implements OnInit {

  constructor() { }

  carsData=[{"id":1,"name":"Swift VXi","year":2021,"color":"Red","price":680000},{"id":2,"name":"Mahindra kuv 100","year":2016,"color":"black","price":721000},{"id":3,"name":"Hyundai Venu","year":2019,"color":"black","price":753000}]

  ngOnInit(): void {
  }

}
