import { NgModule } from '@angular/core';

import { MessageComponent } from './message/message.component';

@NgModule({
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
