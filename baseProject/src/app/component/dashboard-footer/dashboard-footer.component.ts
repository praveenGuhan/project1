import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-footer',
  standalone: true,
  imports: [   
     MatIconModule,
     CommonModule,
  ],
  templateUrl: './dashboard-footer.component.html',
  styleUrl: './dashboard-footer.component.scss'
})
export class DashboardFooterComponent {
  footerList = [
    {value:'Home',icon:'home'},
    {value:'Liked',icon:'favorite'},
    {value:'Messaage',icon:'chat'},
    {value:'Notification',icon:'notifications'},
  ]
}
