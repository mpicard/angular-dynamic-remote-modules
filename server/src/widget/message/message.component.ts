import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <p *ngIf="a">
      message works!
    </p>
  `,
  styles: []
})
export class MessageComponent implements OnInit {
  a = true;

  ngOnInit() {
    console.log('Woo!');
  }
}
