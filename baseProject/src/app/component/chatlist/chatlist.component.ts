import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-chatlist',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chatlist.component.html',
  styleUrl: './chatlist.component.scss'

})
export class ChatlistComponent {

  chatlist = [
    {name:'praveen',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'rohan',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'siva',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'chandraswar',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'balaji',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'raj',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'kumar',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'ram',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'praveen',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'rohan',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'siva',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'chandraswar',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'balaji',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'raj',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'kumar',date:'11-03-2024',content:"Hi",day:'Yesterday'},
    {name:'ram',date:'11-03-2024',content:"Hi",day:'Yesterday'},
  ]
}
