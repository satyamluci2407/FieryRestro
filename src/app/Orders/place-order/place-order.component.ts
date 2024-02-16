import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
  
  inpOrder={
    orderNo: "",
    contactName: "",
    orderDate: new Date(),
    itemsOrdered: [],
    orderTotal: 0,
    taxTotal: 0,
    grandTotal: 0
  }
  detail: any;
  order: any;

  constructor(private http: HttpClient){}

  getAll(){
    this.http.get(`http://localhost:3000/pet`)
      .subscribe(d=>this.order = d)
  }
  save(){
    alert("Order data saved")
    this.http.post("http://localhost:3000/Orders",this.inpOrder).subscribe((d)=>this.detail)
    console.log(this.detail)
    this.getAll()
  }
  pd: boolean = false;
  pushh(){
    this.pd=true;
  }
}
