import {
  Compiler,
  COMPILER_OPTIONS,
  CompilerFactory,
  NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

export function createCompiler(cf: CompilerFactory) {
  return cf.createCompiler();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  providers: [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS]
    },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
  ]
})
export class AppModule {}
