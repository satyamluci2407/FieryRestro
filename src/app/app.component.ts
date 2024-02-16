import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ViewOrdersComponent } from "./Orders/view-orders/view-orders.component";
import { ViewOrderInfoComponent } from './Orders/view-order-info/view-order-info.component';
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, ViewOrdersComponent, ViewOrderInfoComponent, FooterComponent, HomeComponent]
})
export class AppComponent {
  title = 'fiery_restaurant';
}

