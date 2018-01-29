import { Component, OnInit } from '@angular/core';
import { AppMessageService } from '../app-message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(private messageService:AppMessageService) { }

  ngOnInit() {
  }

}
