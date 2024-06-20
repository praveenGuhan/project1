import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [MatGridListModule,MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatSlideToggleModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {
  clickEvent(event: MouseEvent) {
    // this.hide.set(!this.hide);
    event.stopPropagation();
  }
}
