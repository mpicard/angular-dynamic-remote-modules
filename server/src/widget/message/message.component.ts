import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <p>
      message works!
    </p>
  `,
  styles: []
})
export class MessageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
