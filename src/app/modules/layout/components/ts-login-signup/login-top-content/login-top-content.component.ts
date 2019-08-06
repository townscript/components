import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-top-content',
  templateUrl: './login-top-content.component.html',
  styleUrls: ['./login-top-content.component.scss']
})
export class LoginTopContentComponent implements OnInit {

  @Input() condition: string;
  constructor() { }

  ngOnInit() {
    console.log('whats the condition', this.condition);
  }

}
