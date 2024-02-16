import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../Models/Order';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  fetch: any;
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/Orders');
  }

  getOrder(orderNo: string): Observable<Order> {
    console.log('getOrder', orderNo)
    console.log(this.http.get<Order>(`http://localhost:3000/Orders/${orderNo}`))
    return this.http.get<Order>(`http://localhost:3000/Orders/${orderNo}`)
  }

  getOrderByOrderNo(orderNo: string): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/Orders/').pipe(
      map((orders: any[]) => orders.find(order => order.orderNo === orderNo))
    );
  }
}
