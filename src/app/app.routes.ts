import { Routes } from '@angular/router';
import { ViewOrdersComponent } from './Orders/view-orders/view-orders.component';
import { ViewOrderInfoComponent } from './Orders/view-order-info/view-order-info.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlaceOrderComponent } from './Orders/place-order/place-order.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'header', component: HeaderComponent},
    {path:'footer', component: FooterComponent},
    { path:'home', component: HomeComponent},
    { path: 'view-orders', component: ViewOrdersComponent },
    { path: 'view-order-info', component: ViewOrderInfoComponent },
    { path: 'place-orders', component: PlaceOrderComponent}
];
