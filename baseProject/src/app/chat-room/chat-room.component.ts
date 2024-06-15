import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashboardFooterComponent } from '../component/dashboard-footer/dashboard-footer.component';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [MatGridListModule,DashboardFooterComponent],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChatRoomComponent {

}
