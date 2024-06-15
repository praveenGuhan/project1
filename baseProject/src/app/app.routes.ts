import { Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { DashboardFooterComponent } from './component/dashboard-footer/dashboard-footer.component';

export const routes: Routes = [
    {path:'chatRoom',component:ChatRoomComponent},
    {path:'dashboardFooter',component:DashboardFooterComponent}

];
