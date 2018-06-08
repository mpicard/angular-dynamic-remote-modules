import * as angularCommon from '@angular/common';
import {
  Compiler,
  Component,
  Injector,
  OnInit,
  SkipSelf,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import * as angularCore from '@angular/core';
import * as angularPlatformBrowser from '@angular/platform-browser';
import * as angularPlatformBrowserDynamic from '@angular/platform-browser-dynamic';

declare const SystemJS;
SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
SystemJS.set(
  '@angular/platform-browser',
  SystemJS.newModule(angularPlatformBrowser)
);
SystemJS.set(
  '@angular/platform-browser-dynamic',
  SystemJS.newModule(angularPlatformBrowserDynamic)
);

const url = 'http://127.0.0.1:8080/bundle.js';

@Component({
  selector: 'app-root',
  template: `
    Max Koretskyi Dynamic Loading
    <div>
      <ng-container #container></ng-container>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(
    private compiler: Compiler,
    @SkipSelf() private injector: Injector
  ) {}

  @ViewChild('container', { read: ViewContainerRef })
  vcr: ViewContainerRef;

  ngOnInit() {
    SystemJS.import(url)
      .then(module => {
        const moduleFactory = this.compiler.compileModuleSync(module.default);
        const moduleRef = moduleFactory.create(this.injector);
        const widgets = moduleRef.injector.get('widgets');
        const resolver = moduleRef.componentFactoryResolver;
        const componentFactory = resolver.resolveComponentFactory(
          widgets[0][0].component
        );
        this.vcr.createComponent(componentFactory);
      })
      .catch(err => console.error(err));
  }
}
