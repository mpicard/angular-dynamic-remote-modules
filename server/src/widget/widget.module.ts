import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MessageComponent],
  entryComponents: [MessageComponent],
  providers: [
    {
      provide: 'widgets',
      useValue: [
        {
          name: 'message',
          component: MessageComponent
        }
      ],
      multi: true
    }
  ]
})
export default class WidgetModule {}
